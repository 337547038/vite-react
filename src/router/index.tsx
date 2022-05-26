import React, {FC, useEffect, lazy} from 'react';
import routes from './routesConfig';
import {Route, Routes, useNavigate, Navigate, BrowserRouter} from 'react-router-dom';
import {Loading} from '../packages/loading'
// 路由装饰器
const RouteDecorator = (props: { route: any }) => {
  const {route} = props;
  const navigate = useNavigate();
  useEffect(() => {
    // 鉴权路由守卫
    if (route.meta?.requireAuth) {
      /*if (!isLogin()) {
        navigate('/login', { state: { redirect: route.pathname } });
      }*/
    }

    // 自定义路由守卫
    route.beforeCreate && route.beforeCreate(route);
    return () => route.beforeDestroy && route.beforeDestroy(route);
  }, [route]);
  return <route.component />;
};
const RouterComponent: FC = () => (
  <React.Suspense fallback={<Loading visible={true} size='small'/>}>
    <Routes>
      {
        routes.map(route => <Route key={route.path} path={route.path} element={<route.component />}>
        </Route>)
      }
      {/*<Route path="/" element={<Index />} />*/}
    </Routes>
  </React.Suspense>
);

export default RouterComponent;
