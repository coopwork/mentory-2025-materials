import Button from "./button.tsx";
import {useState} from "react";


const LikesBlock = () => {
	const [stats, setStats] = useState({
		likes: 0,
		dislikes: 0
	});

	// const [post, setPost] = useState([]);

	const addLike = () => {
		setStats(prevState => ({
			...prevState,
			likes: prevState.likes + 1,
		}));
	};
	const addDislike = () => {
		setStats(prevState => ({
			...prevState,
			dislikes: prevState.dislikes + 1,
		}));
	};

	console.log(stats)
	return (
			<div>
				<h3>
					Лайки: {stats.likes}
				</h3>
				<h3>
					Дизлайки: {stats.dislikes}
				</h3>
				<Button variant='primary' props={{onClick: addLike}}>
					Лайк
				</Button>
				<Button variant='outline' props={{onClick: addDislike}}>
					Дизлайк
				</Button>
			</div>
	);
};

export default LikesBlock;