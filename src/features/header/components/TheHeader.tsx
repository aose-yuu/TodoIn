import { DarkModeCheckBox } from '@/features/darkMode/components';

export const TheHeader: React.FC = () => {
  return (
    <>
      <div className="h-full w-full bg-blue-500">
        <h1>header</h1>
        <DarkModeCheckBox />
      </div>
    </>
  );
};
