import * as React from "react";
import {useState} from "react";
import {Button, Skeleton, TextField} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

type CreateTodoProps = {
	onCreateTodo: (title: string) => Promise<void>
}

const CreateTodo = ({onCreateTodo}: CreateTodoProps) => {
	const [isPending, setIsPending] = useState(false);
	const [title, setTitle] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!title) return;
		setIsPending(true)
		await onCreateTodo(title);
		setTitle('');
		setIsPending(false)
	}

	return (
			<div>
				<form className='add_todo_form' onSubmit={handleSubmit}>
					<TextField
							fullWidth
							disabled={isPending}
							id="standard-basic"
							label="Название Todo"
							variant="standard"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
					/>
					<Button
							type='submit'
							color="primary"
							loading={isPending}
							loadingPosition="start"
							startIcon={<AddCircleIcon/>}
							variant="outlined"
					>
						Добавить Todo
					</Button>
				</form>

				{isPending && (
						<Skeleton variant="rounded" width={'100%'} height={75}/>
				)}
			</div>
	);
};

export default CreateTodo;