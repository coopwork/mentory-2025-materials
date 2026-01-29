import Button from "./button.tsx";
import {useState} from "react";


const LikesBlock = () => {
	const [likes, setLikes] = useState(0);

	const increment = () => {
		setLikes(p => p + 1)
	}
	const decrement = () => {
		setLikes(p => p - 1)
	}
	return (
			<div>
				<h3>
					Лайки: {likes}
				</h3>
				<Button variant='primary' props={{onClick: increment}}>
					Добавить лайк
				</Button>
				<Button variant='outline' props={{onClick: decrement}}>
					Удалить лайк
				</Button>
			</div>
	);
};

export default LikesBlock;