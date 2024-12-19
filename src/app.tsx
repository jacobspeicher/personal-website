import './app.css'

import { Header } from './components/header/header';
import { NavBar } from './components/nav-bar/nav-bar';
import { Content } from './components/content/content';

export function App() {

	const links = [
		{
			text: 'github',
			link: 'https://github.com/jacobspeicher',
			externalLink: true,
		},
		{
			text: 'linkedin',
			link: 'https://linkedin.com/in/jacobspeicher',
			externalLink: true,
		},
		{
			text: 'itch.io',
			link: 'https://paetramon.itch.io',
			externalLink: true,
		}
	];

	return (
		<>
			<Header />
			<NavBar menuOptions={links} />
			<Content />
		</>
	);
}