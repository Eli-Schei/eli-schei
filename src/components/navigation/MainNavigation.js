import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


export default function MainNavigation() {
    return     <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="AllPosts">Blog</NavLink>
      </li>
    </ul>
  </nav>
}