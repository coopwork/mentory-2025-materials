import type {TodoType} from "../types/todo.ts";
import * as React from "react";
import {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type {TransitionProps} from "@mui/material/transitions";
import SaveIcon from "@mui/icons-material/Save";


type TodoCardProps = {
	todo: TodoType
	toggleTodo: (id: number, completed: boolean) => Promise<void>
	updateTodoTitle: (id: number, title: string) => Promise<void>
	handleDeleteTodo: (id: number) => Promise<void>
}


const Transition = React.forwardRef(function Transition(
		props: TransitionProps & {
			children: React.ReactElement<any, any>;
		},
		ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

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
							<Button size='small' onClick={handleToggleEditTitle} loading={isDeleting}>
								<EditIcon fontSize='small'/>
							</Button>
							<Button size='small' color='error' onClick={deleteTodo} loading={isDeleting}>
								<DeleteIcon fontSize='small'/>
							</Button>
						</div>
						<Dialog
								open={isTitleEdit}
								slots={{
									transition: Transition,
								}}
								keepMounted
								onClose={handleToggleEditTitle}
								aria-describedby="alert-dialog-slide-description"
						>
							<DialogTitle>Редактирование TODO карточки</DialogTitle>
							<DialogContent>
								<TextField
										fullWidth
										label="Название Todo"
										variant="outlined"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
								/>
							</DialogContent>
							<DialogActions>
								<Button
										onClick={handleToggleEditTitle}
										startIcon={<SaveIcon/>}
								>
									Сохранить
								</Button>
							</DialogActions>
						</Dialog>
						<label
								htmlFor={`todo-${todo.id}`}
								style={{
									opacity: isUpdating ? 0.25 : 1,
								}}
						>
						<span>
									<>
										{todo.title} {isUpdating ? '...' : ''}
									</>
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