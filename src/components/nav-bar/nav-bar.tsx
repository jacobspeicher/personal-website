import { NavItem } from './nav-item/nav-item';

import './nav-bar.css';

export function NavBar(props: { menuOptions: { text: string }[] }) {
	const { menuOptions } = props;
	return (
		<>
			<nav className='nav-bar'>
				<ul className='nav-container'>
					{
						menuOptions.map((option) => {
							return (
								<NavItem text={option.text} />
							)
						})
					}
				</ul>
			</nav>
		</>
	);
}