import './App.css'
import LikesBlock from "./test/likes-block.tsx";
import FeedbackForm from "./test/feedback-form.tsx";
import {
	createContext,
	useEffect, useLayoutEffect,
	// useEffect,
	useState
} from "react";
import TestRef from "./test/test-ref.tsx";
import Button from "./components/button.tsx";
import TodoList, {type TodoType} from "./test/todo-list.tsx";
import Input from "./components/input.tsx";
import OptimizationTest from "./test/optimization-test.tsx";



const spinnerStyles = {
	width: '100px',
	height: '100px',
	border: '10px solid red',
	borderStyle: 'dashed',
	borderRadius: '50%',
	animation: 'rotate 2s linear infinite'
}

type TodoContextType = {
	todo: TodoType[]
	getTodo: () => void
}

export const TodoContext = createContext<TodoContextType>({
	todo: [],
	getTodo: () => {}
});


function App() {
	const now = new Date().getTime();
	const [showFeedback, setShowFeedback] = useState(false);
	const [todo, setTodo] = useState<TodoType[]>([]);


	async function getTodo() {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos')
				.then(response => response.json())
				.then(json => json);
		console.log('TODO: ПОЛУЧЕНЫ')
		setTodo(response);
	}

	// getTodo();

	useEffect(() => {
		const dif = new Date().getTime() - now;
		console.log('useEffect', dif)
	}, []);

	useLayoutEffect(() => {
		const dif =new Date().getTime() - now;
		console.log('useLayoutEffect', dif)
		getTodo();
	}, []);

  return (
			<TodoContext.Provider
					value={{
				todo,
				getTodo
			}}>
					<div>
						<TestRef/>
						<div style={spinnerStyles}/>

						<OptimizationTest/>

						<Input/>

						<Button/>

						<LikesBlock/>
						<button onClick={() => setShowFeedback(!showFeedback)}>
							{showFeedback ? 'Скрыть' : 'Показать'}
						</button>
						{showFeedback && (
							<FeedbackForm/>
						)}

						<TodoList
								// todo={todo}
								//  getTodo={getTodo}
						/>
					</div>
			</TodoContext.Provider>
  )
}

export default App
