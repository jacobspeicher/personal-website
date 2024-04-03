// import { useState } from 'preact/hooks'
import './app.css'

import { Header } from './components/header/header';
import { NavBar } from './components/nav-bar/nav-bar';
import { Footer } from './components/footer/footer';

// colors
// #4ab4ac - main
// #94d5d5 - highlight
// #ee8b31 - accent

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

	return (
		<>
			<Header />
			<NavBar menuOptions={links} />
			<NavBar menuOptions={menuOptions} />
			<Footer />
		</>
	)
}