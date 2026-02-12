import {Fragment} from "react";


const Input = () => {
	return (
			<>

				{[1,2,3,4,5].map(num=>(
						<Fragment key={num}>
							<h3 >{num}</h3>
							<button>Удалить</button>
						</Fragment>
				))}

				<div>
					<h1>INPUT</h1>
				</div>
				<div>
					<input type="text"/>
				</div>
			</>
	);
};

export default Input;