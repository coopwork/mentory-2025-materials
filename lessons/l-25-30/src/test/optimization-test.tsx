import {useCallback, useState} from "react";
import IconListItem from "./icon-list-item.tsx";


export const icons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];

const OptimizationTest = () => {
	const [test, setTest] = useState(0);

	const onClick = useCallback(()=>{
		console.log('useCallback', test+1)
		setTest(prev=>prev+1)
	}, [test]);

	return (
			<div>
				<div>
					<h1>Оптимизация</h1>
					<h2>{test}</h2>
					<button onClick={onClick}>Кликни</button>

					{['Test 1', 'Test 2'].map(text=>(
						<IconListItem key={text} text={text}></IconListItem>
					))}
				</div>
			</div>
	);
};

export default OptimizationTest;