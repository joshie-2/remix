import { Outlet, LinksFunction, Link } from 'remix';
import stylesUrl from '../styles/jokes.css';

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: stylesUrl,
		},
	];
};
const Jokes = () => {
	return (
		<div className='jokes-layout'>
			<header className='jokes-header'>
				<div className='container'>
					<h1 className='home-link'>
						<Link to='/' title='Remix Jokes' aria-label='Remix Jokes'>
							<span className='logo'>🤪</span>
							<span className='logo-medium'>J🤪KES</span>
						</Link>
					</h1>
				</div>
			</header>

			<main className='jokes-main'>
				<div className='container'>
					<div className='jokes-list'>
						<Link to='.'>Get Random Joke</Link>
						<p>Here are a few more jokes to look at.</p>
						<ul>
							<li>
								<Link to='some-joke-id'>Hippo</Link>
							</li>
						</ul>
						<Link to='new' className='button'>
							Add your own!
						</Link>
					</div>
					<div className='jokes-outlet'>
						<Outlet />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Jokes;
