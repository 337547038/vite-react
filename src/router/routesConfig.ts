import {lazy} from 'react';

const docsFilesMd = import.meta.glob('../packages/*/README.md');
const docsRouter: any = [];
const routerList: any = [];
Object.keys(docsFilesMd).forEach((key: string) => {
  const path = key.replace('../packages', '').replace('/README.md', '');
  docsRouter.push({
    path: path,
    //component: docsFilesMd[key].default
    component: lazy(docsFilesMd[key] as any)
  });
  routerList.push(path);
});
// console.log(docsFilesMd)
// 页面路由配置
export default [
  {
    path: '/',
    component: lazy(() => import('../pages/index'))
  },
  {
    path: '/ant',
    component: lazy(() => import('../pages/ant'))
  },
  ...docsRouter
];
export {routerList};
