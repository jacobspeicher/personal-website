import './nav-item.css';

export interface MenuOption {
	text: string,
	link: string,
	externalLink: boolean,
};

export function NavItem(props: MenuOption) {
	const { text, link, externalLink } = props;

	return (
		<>
			<a href={link} target={externalLink ? '_blank' : ''} className='nav-item'>
				<li>
					<p className='nav-item-text'>{text}</p>
				</li>
			</a>
		</>
	);
}