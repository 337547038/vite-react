/*import Home  from "../pages/index"
export default [
  {
    exact: true,
    path: "/",
    component: Home
  }
]*/
import BlogsList from '../pages/index'
import BlogsDetail from '../pages/index'

export default {
  routes: [
    { exact: true, path: '/', component: BlogsList },
    { exact: true, path: '/blogs/detail/:article_id', component: BlogsDetail },
  ],
}
/*
https://github.com/JohnnyZhangQiao/lottery-box-react*/
