import "./App.css";
import { useState} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/blog/AllPosts";
import OnePost from "./components/blog/OnePost";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import MainNavigation from "./components/navigation/MainNavigation";
import ThemeContext  from "./context/ThemeContext";

function App() {
  const theme = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <BrowserRouter>
          <MainNavigation />
          <main>
            <Route component={HomePage} path="/" exact />
            <Route component={AllPosts} path="/blog" exact />
            <Route component={OnePost} path="/blog/:slug" />
            <Route component={AboutPage} path="/about" />
          </main>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
