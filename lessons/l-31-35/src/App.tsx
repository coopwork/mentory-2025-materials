import './App.css'
import {lazy, Suspense} from "react";
import AppRouter from "./app-router.tsx";

const MainHeader = lazy(() => import("./components/main-header.tsx"));

function App() {

	return (
			<>
				<Suspense fallback={<h1>Loading...</h1>}>
					<MainHeader/>
				</Suspense>
				<AppRouter/>
			</>
	)
}

export default App
