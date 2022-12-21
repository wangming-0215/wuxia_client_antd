import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import GlobalStyles from './components/GlobalStyles';
import AuthGuard from './guards/auth.guard';
import Loadable from './components/Loadable';
import Loader from './components/Loader';
import Layout from './layout';
import createTheme from './theme/createTheme';

import { MessageProvider } from './context/Message';
import { useAppSelector } from './app/hooks';

const Auth = Loadable(React.lazy(() => import('./features/auth')));
const Members = Loadable(React.lazy(() => import('./features/members')));

function App() {
  const themeMode = useAppSelector((state) => state.theme.mode);

  const theme = createTheme(themeMode);

  return (
    <ConfigProvider theme={theme}>
      <MessageProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route element={<Layout />}>
                <Route element={<AuthGuard />}>
                  <Route index element={<Members />} />
                </Route>
              </Route>
              <Route path="login" element={<Auth />} />
              <Route path="test" element={<Loader fullscreen />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MessageProvider>
    </ConfigProvider>
  );
}

export default App;
