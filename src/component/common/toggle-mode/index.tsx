import { MdOutlineLightMode, MdOutlineNightlightRound } from 'react-icons/md';
import './toggle-mode.css';
import { useEffect, useState } from 'react';

const ThemeType = {
  light: 'light',
  dark: 'dark',
};

const checkThemeSystem = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return saved || (prefersDark ? ThemeType.dark : ThemeType.light);
  }
  return ThemeType.light;
};

const ToggleMode = () => {
  const [theme, setTheme] = useState<string>(checkThemeSystem());

  useEffect(() => {
    const html = document.querySelector('html');
    if (theme === ThemeType.dark) {
      html?.classList?.add('dark');
    } else {
      html?.classList?.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === ThemeType.light ? ThemeType.dark : ThemeType.light);
  };

  return (
    <div className="wrapper-icon">
      {theme === ThemeType.light ? (
        <MdOutlineNightlightRound className="icon-theme" onClick={handleTheme} />
      ) : (
        <MdOutlineLightMode className="icon-theme" onClick={handleTheme} />
      )}
    </div>
  );
};

export default ToggleMode;
