import {lazy} from "react";
// import TodoPage from "./pages/todo-page.tsx";
// import HomePage from "./pages/home-page.tsx";
// import MainHeader from "./components/main-header.tsx";
// import PostsPage from "./pages/posts-page.tsx";
// import NotFound from "./pages/not-found.tsx";
// import PostDetailsPage from "./pages/post-details-page.tsx";


const NotFound = lazy(() => import("./pages/not-found.tsx"));
const HomePage = lazy(() => import("./pages/home-page.tsx"));
const TodoPage = lazy(() => import("./pages/todo-page.tsx"));
const PostsPage = lazy(() => import("./pages/posts-page.tsx"));
const PostDetailsPage = lazy(() => import("./pages/post-details-page.tsx"));

export const PAGES = [
	{
		path: '*',
		element: NotFound,
	},
	{
		path: '/',
		element: HomePage,
	},
	{
		path: '/todos',
		element: TodoPage,
	},
	{
		path: '/posts',
		element: PostsPage,
	},
	{
		path: '/posts/:postId',
		element: PostDetailsPage,
	},
];


// const PAGES_R = {
// 	"common": [],
// 	"admin": [],
// 	"user": [],
// }
// const userRole = 'user'

// const routes = [...PAGES_R.common, ...PAGES_R[userRole]]