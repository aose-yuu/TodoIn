import { atomWithStorage } from 'jotai/utils';

export const darkModeAtom = atomWithStorage(
  'isDarkMode',
  localStorage.getItem('isDarkMode') === 'true' ? true : false,
);
