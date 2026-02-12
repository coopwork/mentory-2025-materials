import TodoListItems from "./todo-list-items.tsx";

export type TodoType = {
	id: number;
	title: string;
	completed: boolean;
}

// type PropsType = {
// 	todo: TodoType[]
// 	getTodo: () => void
// }

const TodoList = (
		// {todo, getTodo}: PropsType
) => {

	return (
			<div>
				<TodoListItems
						// todo={todo} getTodo={getTodo}
				/>
			</div>
	);
};

export default TodoList;