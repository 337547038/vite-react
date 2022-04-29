import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter,BrowserRouter, Routes,Route } from 'react-router-dom'
// import App from './App'
import routerConfig from './router/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {
          routerConfig.routes.map((route) => {
            return (
              <Route key={route.path} {...route} />
            )
          })
        }
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
