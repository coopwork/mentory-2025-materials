import type {ButtonHTMLAttributes, ReactNode} from "react";
import styles from './button.module.css';

type PropsType =  {
	children?: ReactNode
	variant?: 'primary' | 'outline'
	props?: ButtonHTMLAttributes<HTMLButtonElement>
}

const Button = ({props, children, variant = 'primary'}:PropsType) => {

	return (
			<button {...props} className={styles[variant]} >
				{children}
			</button>
	);
};

export default Button;