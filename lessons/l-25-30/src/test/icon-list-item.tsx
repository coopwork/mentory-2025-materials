import {icons} from "./optimization-test.tsx";
import {useMemo} from "react";

const getRandomIcon = () => {
	return icons[Math.floor(Math.random() * icons.length)]
}

const IconListItem = ({text}: {text: string}) => {

	// ДОМАШНЯЯ ЗАДАНИЕ (САМОСТОЯТЕЛЬНО)
	// Изучить memo

	// const icon = getRandomIcon()
	const icon = useMemo(()=>getRandomIcon(), [])

	return (
			<h2 key={text}>{icon} - {text}</h2>
	);
};

export default IconListItem;