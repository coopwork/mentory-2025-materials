import * as React from "react";
import {useState} from "react";

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
					<input
							disabled={isPending}
							type="text"
							placeholder="Название Todo"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
					/>
					<button disabled={isPending}>
						Добавить Todo
					</button>
				</form>

				{isPending && (
						<div className='skeleton__todo_card'/>
				)}
			</div>
	);
};

export default CreateTodo;