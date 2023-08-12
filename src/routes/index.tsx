import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HeaderSidebarLayout } from '@/common/layouts/HeaderSidebarLayout';
import { ViewPortLayout } from '@/common/layouts/ViewPortLayout';
import { DarkMode } from '@/features/darkMode/components';

export const Router: React.FC = () => {
  return (
    <DarkMode>
      <ViewPortLayout>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<HeaderSidebarLayout>aiueo</HeaderSidebarLayout>}
            />
          </Routes>
        </BrowserRouter>
      </ViewPortLayout>
    </DarkMode>
  );
};
