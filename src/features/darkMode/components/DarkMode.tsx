import { PropsWithChildren } from 'react';

import { useDarkMode } from '../hooks';

type Props = PropsWithChildren;

export const DarkMode: React.FC<Props> = (props) => {
  const { children } = props;
  const { isDarkMode } = useDarkMode();
  console.log(isDarkMode);
  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white">
        {children}
      </div>
    </div>
  );
};
