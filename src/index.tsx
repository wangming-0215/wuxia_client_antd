import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import './wdyr';
import '@fontsource/zcool-qingke-huangyou';
import '@fontsource/noto-sans-sc';

function prepare() {
  console.log('env: ', process.env);
  if (process.env.REACT_APP_NODE_ENV === 'development') {
    const { worker } = require('./__mocks__/browser');
    return worker.start({ onUnhandledRequest: 'warn' });
  }
  return Promise.resolve();
}

prepare().then(() => {
  const container = document.getElementById('root')!;
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});

// reportWebVitals(console.log);
