import type {TodoType} from "../types/todo.ts";
import {useState} from "react";


type TodoCardProps = {
	todo: TodoType
	toggleTodo: (id: number, completed: boolean) => Promise<void>
	updateTodoTitle: (id: number, title: string) => Promise<void>
	handleDeleteTodo: (id: number) => Promise<void>
}

const TodoCard = ({todo, toggleTodo, updateTodoTitle, handleDeleteTodo}: TodoCardProps) => {
	const [title, setTitle] = useState(todo.title);
	const [isTitleEdit, setIsTitleEdit] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);

	const handleUpdateTodoStatus = async () => {
		setIsUpdating(true);
		await toggleTodo(todo.id, !todo.completed)
		setIsUpdating(false);
	}

	const handleUpdateTodoTitle = async () => {
		setIsUpdating(true);
		await updateTodoTitle(todo.id, title)
		setIsUpdating(false);
	}

	const handleToggleEditTitle = async () => {
		setIsTitleEdit(prev => {
			if (prev && title !== todo.title) handleUpdateTodoTitle()

			return !prev
		})
	}

	const deleteTodo = async () => {
		setIsDeleting(true);
		await handleDeleteTodo(todo.id)
		setIsDeleting(false);
	}

	return (
			<div className='todo__card'>
				<h2 className='todo__title'>
					<div className='todo__title__wrapper'>
						<div className='todo__title__actions'>
							<button
									className='edit__title_btn'
									onClick={handleToggleEditTitle}
									disabled={isDeleting}
							>
								{isTitleEdit ? 'Сохранить' : 'Редактировать'}
							</button>
							<button
									disabled={isDeleting}
									className='edit__title_btn'
									onClick={deleteTodo}
							>
								{isDeleting ? 'Удаляем...' : 'Удалить'}
							</button>
						</div>
						<label
								htmlFor={`todo-${todo.id}`}
								style={{
									opacity: isUpdating ? 0.25 : 1,
								}}
						>
						<span>

							{isTitleEdit ? (
									<input
											type="text"
											value={title}
											onChange={(e) => setTitle(e.target.value)}
									/>
							) : (
									<>
										{todo.title} {isUpdating ? '...' : ''}
									</>
							)}
						</span>
						</label>
					</div>
					<input
							id={`todo-${todo.id}`}
							disabled={isUpdating || isDeleting}
							type="checkbox"
							checked={todo.completed}
							onChange={handleUpdateTodoStatus}
					/>
				</h2>
			</div>
	);
};

export default TodoCard;