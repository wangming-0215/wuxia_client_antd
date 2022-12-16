import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import GlobalStyles from './components/GlobalStyles';
import AuthGuard from './guards/auth.guard';

import Auth from './features/auth';
import Members from './features/members';
import { MessageProvider } from './context/Message';

function App() {
  return (
    <ConfigProvider
      theme={{ token: { colorBgLayout: '#f9fafc', colorPrimary: '#10b981' } }}
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
            </Route>
          </Routes>
        </BrowserRouter>
      </MessageProvider>
    </ConfigProvider>
  );
}

export default App;
