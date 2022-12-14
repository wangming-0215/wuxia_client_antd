import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import GlobalStyles from './components/GlobalStyles';
import BlankPage from './components/BlankPage';

import Auth from './features/auth';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username: 'wang_xiao_ming',
        password: 'Wm@123456',
      }),
    });
  }, []);

  return (
    <ConfigProvider
      theme={{ token: { colorBgLayout: '#f9fafc', colorPrimary: '#10b981' } }}
    >
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<BlankPage>空白页</BlankPage>} />
            <Route path="signin" element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
