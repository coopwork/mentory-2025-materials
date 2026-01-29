import {useState} from "react";


const Accordion = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisible = () => {
		setIsVisible(prevState => !prevState);
	}

	return (
			<div>
				<button onClick={toggleVisible}>
					{isVisible ? 'Закрыть' : 'Открыть'}
				</button>
				{isVisible && (
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem blanditiis cumque dolor dolores est eum ex fugiat impedit iure laboriosam magni molestias nemo, neque nisi odio pariatur quibusdam vitae!
					</div>
				)}
			</div>
	);
};

export default Accordion;