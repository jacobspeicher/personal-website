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

	const menuOptions = [
		{
			text: 'Web Projects'
		},
		{
			text: 'Games'
		},
	];

  return (
    <>
      <Header />
      <NavBar menuOptions={menuOptions} />
      <Footer />
    </>
  )
}