import './tab.css'

export function Tab(props: {
	title: string,
	active: boolean,
	onClick: (ev: MouseEvent) => void
}) {
	return (
		<button className={`tab ${props.active ? 'active' : 'inactive'}`} onClick={props.onClick}>
			{props.title}
		</button>
	)
}