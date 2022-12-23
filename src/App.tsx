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
import BlankPage from './components/BlankPage';
import { useThemeData } from './context/ThemeData';

const Auth = Loadable(React.lazy(() => import('./features/auth')));
const Members = Loadable(React.lazy(() => import('./features/members')));

function App() {
  const {
    themeData: { mode, compact, colorPrimary },
  } = useThemeData();

  const theme = createTheme(mode, compact, colorPrimary);

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
                  <Route
                    path="activity"
                    element={<BlankPage>活动</BlankPage>}
                  />
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
