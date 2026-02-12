import {useEffect, useLayoutEffect, useRef, useState} from "react";


const TestRef = () => {
	const [texts, setTexts] = useState<string[]>([]);
	const myInputRef = useRef<HTMLInputElement>(null);
	const inputRef = useRef({
		value: '',
		placeholder: 'test ref'
	});

	const getValue = () => {
		console.log(inputRef.current.value);
		setTexts(prevState => [...prevState, inputRef.current.value]);
	}

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		inputRef.current.value = e.target.value;
	}

	useLayoutEffect(() => {
		console.log('myInputRef', myInputRef.current);
	}, []);

	useEffect(() => {
		console.log('myInputRef', myInputRef.current);
		console.log(inputRef.current);
	}, []);

	return (
			<div>
				<input ref={myInputRef} type="text" placeholder='test ref' onChange={onChange}/>

				<button onClick={getValue}>Получить значение</button>


				<div>
					{texts.map((text, index) => (
						<div key={index}>{text}</div>
					))}
				</div>
			</div>
	);
};

export default TestRef;