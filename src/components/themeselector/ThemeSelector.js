import {useContext, useState} from 'react';
import ThemeContext from '../../context/ThemeContext';
import styles from './themeselector.module.css'


export default function ThemeSelector() {
  const currentTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState(currentTheme);
  return (
    <div className={styles.themeSwitchWrapper}>
      <label className={styles.themeSwitch} for="checkbox">
        <input onChange={switchTheme} type="checkbox" id="checkbox" />
        <div className={ styles.slider + " " + styles.round}></div>
      </label>
      <em>Enable Dark Mode!</em>
    </div>
  );
}


function switchTheme(e) {
    if (e.target.checked) {
        document.getElementsByTagName("body")[0].setAttribute('data-colorTheme', 'dark');
    }
    else {
        document.getElementsByTagName("body")[0].setAttribute('data-colorTheme', 'light');
    }    
}