import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ViewPortLayout } from '@/common/layouts/ViewPortLayout';
import { DarkMode, DarkModeCheckBox } from '@/features/darkMode/components';

export const Router: React.FC = () => {
  return (
    <DarkMode>
      <ViewPortLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DarkModeCheckBox />} />
          </Routes>
        </BrowserRouter>
      </ViewPortLayout>
    </DarkMode>
  );
};
