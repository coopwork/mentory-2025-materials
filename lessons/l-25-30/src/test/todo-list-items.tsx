import TodoListHeader from "./todo-list-header.tsx";
import {useContext} from "react";
import {TodoContext} from "../App.tsx";


// type PropsType = {
// 	todo: TodoType[]
// 	getTodo: () => void
// }

const TodoListItems = (
		// {todo, getTodo}: PropsType
) => {
	const {todo} = useContext(TodoContext);
	return (
			<div>
				<TodoListHeader
						// getTodo={getTodo}
				/>
				{todo?.map((item)=>(
						<div key={item.id}>
							<h3>{item.id}. {item.title} <span>
								({item.completed ? 'Выполнено' : 'Не выполнено'})
							</span></h3>
						</div>
				))}
			</div>
	);
};

export default TodoListItems;