import {useEffect, useState} from "react";
import type {TodoType} from "../types/todo.ts";
import {updateTodo} from "../utils/api/requests/update-todo.ts";
import {getTodos} from "../utils/api/requests/get-todos.ts";
import CreateTodo from "../components/create-todo.tsx";
import TodoCard from "../components/todo-card.tsx";
import {createTodo} from "../utils/api/requests/create-todo.ts";
import {deleteTodo} from "../utils/api/requests/delete-todo.ts";


const TodoPage = () => {
	const [todos, setTodos] = useState<TodoType[]>([]);

	const toggleTodo = async (id: number, completed: boolean) => {
		const updatedTodo = await updateTodo(id, {completed})
		setTodos(prev => prev.map(todo => todo.id === id ? {...todo, ...updatedTodo} : todo))
	}

	const updateTodoTitle = async (id: number, title: string) => {
		const updatedTodo = await updateTodo(id, {title})
		setTodos(prev => prev.map(todo => todo.id === id ? {...todo, ...updatedTodo} : todo))
	}

	const handleCreateTodo = async (title: string) => {
		const newTodo = await createTodo(title)
		setTodos(prev => [
			{
				...newTodo,
				completed: false,
				id: prev.length + 1,
				userId: 1,
			}, ...prev])
	}

	const handleDeleteTodo = async (id: number) => {
		const isDeleted = await deleteTodo(id)
		if (isDeleted) {
			setTodos(prev => prev.filter(todo => todo.id !== id))
		}
	}

	useEffect(() => {
		getTodos().then((data) => {
			setTodos(data)
		})
	}, []);
	return (
			<div className='todo__list'>
				<h1>Todo List</h1>
				<CreateTodo onCreateTodo={handleCreateTodo}/>
				{todos.map((todo) => (
						<TodoCard
								key={todo.id}
								todo={todo}
								toggleTodo={toggleTodo}
								updateTodoTitle={updateTodoTitle}
								handleDeleteTodo={handleDeleteTodo}
						/>
				))}
			</div>
	);
};

export default TodoPage;