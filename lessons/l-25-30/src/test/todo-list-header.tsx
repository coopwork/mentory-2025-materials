

// type PropsType = {
// 	getTodo: () => void
// }
import {useContext} from "react";
import {TodoContext} from "../App.tsx";

const TodoListHeader = (
		// {getTodo}:PropsType
) => {
	const {getTodo} = useContext(TodoContext);
	return (
			<div>
				<h2>Список дел</h2>
				<button onClick={getTodo}>Обновить</button>
			</div>
	);
};

export default TodoListHeader;