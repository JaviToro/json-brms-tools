import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>JSON BRMS Tools</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Java Date Parser</Link>
			<Link activeClassName={style.active} href="/documentation">How to use</Link>
			<Link activeClassName={style.active} href="/about">About</Link>
		</nav>
	</header>
);

export default Header;
