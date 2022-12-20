import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import GlobalStyles from './components/GlobalStyles';
import AuthGuard from './guards/auth.guard';
import Loadable from './components/Loadable';
import Loader from './components/Loader';

import { MessageProvider } from './context/Message';

const Auth = Loadable(React.lazy(() => import('./features/auth')));
const Members = Loadable(React.lazy(() => import('./features/members')));

function App() {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: '#10b981' },
        // algorithm: theme.darkAlgorithm,
      }}
    >
      <MessageProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route element={<AuthGuard />}>
                <Route index element={<Members />} />
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
