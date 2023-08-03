import { useDarkMode } from '../hooks';

export const DarkModeCheckBox: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <label>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className="peer sr-only"
      />
      <span className="block w-[2em] cursor-pointer rounded-full bg-gray-500 p-[1px] after:block after:h-[1em] after:w-[1em] after:rounded-full after:bg-white after:transition peer-checked:bg-blue-500 peer-checked:after:translate-x-[calc(100%-2px)]" />
    </label>
  );
};
