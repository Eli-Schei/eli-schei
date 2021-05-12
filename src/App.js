import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/blog/AllPosts";
import OnePost from "./components/blog/OnePost";
import HomePage from './components/pages/HomePage';
import MainNavigation from './components/navigation/MainNavigation';

function App() {
  return (
    <div className="App">

    <BrowserRouter>    
      <MainNavigation />
      <div>
        <Route component={HomePage} path="/" exact />
        <Route component={AllPosts} path="/AllPosts" />
        <Route component={OnePost} path="/:slug" />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
