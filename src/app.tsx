// import { useState } from 'preact/hooks'
import './app.css'

import { Header } from './components/header/header';
import { NavBar } from './components/nav-bar/nav-bar';
import { Resume } from './components/resume/resume';
/*import { Footer } from './components/footer/footer';*/

export function App() {
  	// const [count, setCount] = useState(0)

	const links = [
		{
			text: 'github',
			link: 'https://github.com/jacobspeicher',
			externalLink: true,
		},
		{
			text: 'itch.io',
			link: 'https://paetramon.itch.io',
			externalLink: true,
		},
		{
			text: 'linkedin',
			link: 'https://linkedin.com/in/jacobspeicher',
			externalLink: true,
		}
	];

	/*
	const menuOptions = [
		{
			text: 'Web Projects',
			link: 'web-projects',
			externalLink: false,
		},
		{
			text: 'Games',
			link: 'games',
			externalLink: false,
		},
	];
	*/

	return (
		<>
			<Header />
			<NavBar menuOptions={links} />
			<Resume />
		</>
	);
}