import './App.css'
import {Route, Routes} from "react-router";
import TodoPage from "./pages/todo-page.tsx";
import HomePage from "./pages/home-page.tsx";
import MainHeader from "./components/main-header.tsx";
import PostsPage from "./pages/posts-page.tsx";
import NotFound from "./pages/not-found.tsx";
import PostDetailsPage from "./pages/post-details-page.tsx";

function App() {

	return (
			<>
				<MainHeader/>
				<Routes>
					<Route path="*" element={<NotFound/>}/>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/todos" element={<TodoPage/>}/>
					<Route path="/posts" element={<PostsPage/>}/>
					<Route path="/posts/:postId" element={<PostDetailsPage/>}/>
				</Routes>
			</>
	)
}

export default App
