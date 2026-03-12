import {NavLink} from "react-router";
import {useUserStore} from "../store/user/hooks.ts";
import {Button} from "@mui/material";

const MainHeader = () => {
	const {user, sign_out} = useUserStore()
	return (
			<header className='main_header'>
				<div className='container main_header_wrapper'>
					<h2>LOGO</h2>
					<nav className='main_header_nav'>
						<NavLink to="/">Главная</NavLink>
						{user && (
								<>
									<NavLink to="/todos">Дела</NavLink>
									<NavLink to="/posts">Посты</NavLink>
									<Button onClick={sign_out} color='error' variant='contained'>Выйти</Button>
								</>
						)}
						{!user && (
								<NavLink to="/sign-in">Войти</NavLink>
						)}
					</nav>
				</div>
			</header>
	);
};

export default MainHeader;