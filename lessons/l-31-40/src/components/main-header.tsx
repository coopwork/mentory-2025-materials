import {NavLink} from "react-router";
import {useUserStore} from "../store/user/hooks.ts";
import UserAvatar from "./user-avatar.tsx";

const MainHeader = () => {
	const {user} = useUserStore()
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
								</>
						)}
						{!user && (
								<NavLink to="/sign-in">Войти</NavLink>
						)}

						<UserAvatar/>
					</nav>
				</div>
			</header>
	);
};

export default MainHeader;