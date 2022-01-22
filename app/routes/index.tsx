import { Outlet, LinksFunction } from 'remix';
import styles from '../styles/index.css';
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }];
};

const HomeRoute = () => {
	return (
		<div>
			<h1>Hello Index Page</h1>
		</div>
	);
};

export default HomeRoute;
