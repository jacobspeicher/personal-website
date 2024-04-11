import { JSX } from 'preact/jsx-runtime';
import { Resume } from '../resume/resume';
import { Tab } from './tab/tab';
import { useState } from 'preact/hooks';

import './content.css';

interface TabPage {
	tabTitle: string;
	tabContent: JSX.Element;
}

const TabPages: TabPage[] = [
	{
		tabTitle: 'Experience',
		tabContent: <Resume type="experience" />
	},
	{
		tabTitle: 'Projects',
		tabContent: <Resume type="projects" />
	}
];

export function Content() {
	const [active, setActive] = useState(0);

	return (
		<>
			<div className="tab-header">
				{
					TabPages.map((tabPage: TabPage, idx) => {
						return (
							<Tab 
								title={tabPage.tabTitle}
								active={idx == active}
								onClick={() => {
									setActive(idx);
								}}
							/>
						)
					})
				}
			</div>
			{ TabPages[active].tabContent }
		</>
	);
}