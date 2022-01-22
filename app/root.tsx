import { Links, LiveReload, Outlet, LinksFunction } from 'remix';
import GlobalStylesUrl from './styles/global.css';
import GlobalMediumStyleUrl from './styles/global-medium.css';
import GlobalLargeStyleUrl from './styles/global-large.css';

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: GlobalStylesUrl,
		},
		{
			rel: 'stylesheet',
			href: GlobalMediumStyleUrl,
			media: 'print, (min-width: 640px)',
		},
		{
			rel: 'stylesheet',
			href: GlobalLargeStyleUrl,
			media: 'screen and (min-width: 1024px)',
		},
	];
};

export default function App() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<title>Love Remix</title>
				<Links />
			</head>
			<body>
				<Outlet />

				{process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
			</body>
		</html>
	);
}
