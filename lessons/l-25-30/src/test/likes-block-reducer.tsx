import {useEffect, useReducer, useState} from "react";
import {likesDislikesReducer} from "../reducers/likes-dislikes-reducer.ts";
import {useDebounce} from "../hooks/use-debounce.ts";


const LikesBlockReducer = () => {
	const [isModified, setIsModified] = useState(false);
	const [state, dispatch] = useReducer(likesDislikesReducer, { likes: 0, dislikes: 0, name: '' });
	const debouncedName = useDebounce(state.name, 500);

	useEffect(() => {
		if(isModified){
			console.log('use effect: Форма отправлена на сервер')
			console.log(debouncedName);
		}
	}, [debouncedName]);
	return (
			<div>
				<h2>
					LIKES BLOCK REDUCER
				</h2>

				<h4>
					Мое имя:
					{state.name}
				</h4>

				<input type="text" onChange={e => {
					dispatch({type:'update_name', name:e.target.value});
					setIsModified(true)
				}}/>

				<h1>Лайки: {state.likes}</h1>
				<button onClick={()=> {
					dispatch({type: 'add_like'})
				}}>Добавить лайк</button>
				<button onClick={()=> {
					dispatch({type: 'delete_like'})
				}}>Удалить лайк</button>
				<h1>Дизлайки: {state.dislikes}</h1>
				<button onClick={()=> {
					dispatch({type: 'add_dislike'})
				}}>Добавить дизлайк</button>
				<button onClick={()=> {
					dispatch({type: 'delete_dislike'})
				}}>Удалить дизлайк</button>
			</div>
	);
};

export default LikesBlockReducer;