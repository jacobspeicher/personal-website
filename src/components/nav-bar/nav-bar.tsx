import { NavItem, MenuOption } from './nav-item/nav-item';

import './nav-bar.css';

export function NavBar(props: { menuOptions: MenuOption[] }) {
	const { menuOptions } = props;
	return (
		<>
			<nav className='nav-bar'>
				<ul className='nav-container'>
					{
						menuOptions.map((option) => {
							return (
								<NavItem text={option.text} link={option.link} externalLink={option.externalLink} />
							)
						})
					}
				</ul>
			</nav>
		</>
	);
}