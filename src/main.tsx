import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@/packages/theme/index.scss';
import 'vite-plugin-doc-preview/style/style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
/*<React.StrictMode>*/ // react-transition-group不兼容
  <App/>
/*</React.StrictMode>*/
);
