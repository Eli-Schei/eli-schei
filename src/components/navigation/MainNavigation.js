// import { useContext } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import ThemeContext from '../../context/ThemeContext';
import styles from "./navigation.module.css";
import ThemeSelector from '../themeselector/ThemeSelector'

export default function MainNavigation() {
  // const [theme] = useContext(ThemeContext);
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <ThemeSelector />
        </li>
        <li className={styles.li}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="blog">Blog</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
