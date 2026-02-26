import {useEffect, useState} from "react";
import type {TodoType} from "../types/todo.ts";
import {updateTodo} from "../utils/api/requests/update-todo.ts";
import {getTodos} from "../utils/api/requests/get-todos.ts";
import CreateTodo from "../components/create-todo.tsx";
import TodoCard from "../components/todo-card.tsx";
import {createTodo} from "../utils/api/requests/create-todo.ts";
import {deleteTodo} from "../utils/api/requests/delete-todo.ts";
import {MenuItem, Pagination, Select, Skeleton} from "@mui/material";


const TodoPage = () => {
	const [isPendingTodos, setIsPendingTodos] = useState(true);
	const [todos, setTodos] = useState<TodoType[]>([]);
	const [qParams, setQParams] = useState({
		page: 1,
		limit: 10,
		total: 0,
	});

	const handlePageChange = (page: number) => {
		setQParams(prev => ({...prev, page}))
	}

	const handleLimitChange = (limit: number) => {
		setQParams(prev => ({...prev, limit}))
	}

	const toggleTodo = async (id: number, completed: boolean) => {
		const updatedTodo = await updateTodo(id, {completed})
		setTodos(prev => prev.map(todo => todo.id === id ? {...todo, completed: updatedTodo.completed} : todo))
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

	const handleGetTodos = async () => {
		setIsPendingTodos(true);
		getTodos(qParams).then((data) => {
			setTodos(data.todos)
			setQParams(prev => ({...prev, total: data.total}))
		}).finally(() => {
			setIsPendingTodos(false)
		})
	}

	useEffect(() => {
		handleGetTodos()
	}, [qParams.page, qParams.limit]);

	return (
			<div className='todo__list'>
				<h1>Todo List</h1>
				<CreateTodo onCreateTodo={handleCreateTodo}/>
				{isPendingTodos ? (
						[...Array(qParams.limit)].map((_, i) => (
								<Skeleton key={i} variant="rounded" width={'100%'} height={75}/>
						))
				) : (
						todos.map((todo) => (
								<TodoCard
										key={todo.id}
										todo={todo}
										toggleTodo={toggleTodo}
										updateTodoTitle={updateTodoTitle}
										handleDeleteTodo={handleDeleteTodo}
								/>
						))
				)}
				<Pagination
						onChange={(_, page) =>
								handlePageChange(page)}
						count={qParams.total / qParams.limit}
				/>
				<Select
						value={qParams.limit}
						label="Лимит"
						onChange={(e) => handleLimitChange(e.target.value)}
				>
					{
						[5, 10, 25, 50].map((limit) => (
								<MenuItem key={limit} value={limit}>{limit}</MenuItem>
						))
					}
				</Select>
			</div>
	);
};

export default TodoPage;