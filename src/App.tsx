import React, {useState} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import RouterComponent from './router';
import './assets/scss/app.scss';
import 'highlight.js/styles/github-dark.css'; // felipec
import LogoImg from '@/assets/img/logo.jpg';
import {routerList} from './router/routesConfig';

const App = () => {
  const local = window.location.pathname;
  const [path, setPath] = useState(local);
  return (
    <BrowserRouter>
      {/*<div className="sidebar">
        <div className="logo"><img src={LogoImg} />AK-Docs</div>
        <ul>
          {routerList.map((item: string) => {
            return (<li key={item} className={path===item?'active':''} onClick={()=>setPath(item)}><Link to={item}>{item.replace('/', '')}</Link></li>)
          })}
        </ul>
      </div>*/}
      <RouterComponent />
      {/*<BrowserRouter>
      <React.Suspense fallback={<div>...</div>}>
      <Routes>
        {
          RouterComponent.map(route => <Route key={route.path} path={route.path} element={<route.component />}>
          </Route>)
        }
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </React.Suspense>
    </BrowserRouter>*/}
    </BrowserRouter>
  );
};
export default App;
