import './nav-item.css';

export function NavItem(props: { text: string }) {
	const { text } = props;
	return (
		<>
			<li className='nav-item'>{text}</li>
		</>
	);
}