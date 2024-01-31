import About from "../../pages/About";
import PostPage from "../../pages/PostPage";
import Posts from "../../pages/Posts";
import Error from "../../pages/Error";
import Login from "../../pages/Login";

export const privateRoutes = [

  {path: '/about', component: About, exact: true},
  {path: '/', component: Posts, exact: true},
  {path: '/posts/:id', component: PostPage, exact: true},
  {path: '*', component: Error, exact: true},

]

export const publicRoutes = [

  {path: '/login', component: Login, exact: true},
  {path: '*', component: Error, exact: true},
  {path: '/about', component: About, exact: true},

]