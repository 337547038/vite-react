import React, { FC, useEffect } from 'react';
import routes from './routesConfig';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
// @ts-ignore
import { IRoute } from '@/types/router';

// 路由装饰器
const RouteDecorator = (props: { route: IRoute }) => {
  const { route } = props;
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
<Routes>
  {/*<Route path="/" element={<Navigate to="/index" />} />
    <Route path="*" element={<ErrorBlock fullPage />} />*/}
  {routes.map(route => (
  <Route
  key={route.path}
  path={route.path}
  element={<RouteDecorator route={route} />}
  />
  ))}
</Routes>
);

export default RouterComponent;
