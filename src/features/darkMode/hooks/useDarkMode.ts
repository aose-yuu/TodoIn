import { useAtom } from 'jotai';

import { darkModeAtom } from '../atoms';

export const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useAtom(darkModeAtom);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return { isDarkMode, toggleDarkMode };
};
