import { useEffect, useState } from 'react';
import MainPage from './main_page';

function App() {
  const getPreferredTheme = () => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const stored = window.localStorage.getItem('site-theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    const hour = new Date().getHours();
    return hour >= 20 || hour < 8 ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('site-theme', theme);
  }, [theme]);

  return <MainPage theme={theme} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />;
}

export default App;