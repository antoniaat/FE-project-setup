import { useState, useEffect } from 'react';
import { Navigation } from '../navigation/navigation';
import { Footer } from '../footer/footer';
import { lightTheme, darkTheme, Theme } from '../../styles/theme.styled';
import { ThemeProvider } from 'styled-components';

interface LayoutProps {
  children: React.ReactNode | string;
}

export const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState('dark');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Theme />
      <Navigation toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
