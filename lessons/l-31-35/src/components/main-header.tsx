import {NavLink} from "react-router";

const MainHeader = () => {
	return (
			<header className='main_header'>
				<div className='container main_header_wrapper'>
					<h2>LOGO</h2>
					<nav className='main_header_nav'>
						<NavLink to="/">Главная</NavLink>
						<NavLink to="/todos">Дела</NavLink>
						<NavLink to="/posts">Посты</NavLink>
					</nav>
				</div>
			</header>
	);
};

export default MainHeader;