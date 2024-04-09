import { IExperience, Experience } from "./experience/experience";
import './resume.css';

const dzx: IExperience = {
	company: 'DZX (Contract: PlayStation)',
	title: 'Software Development Engineer in Test',
	startDate: new Date(2021, 4),
	location: 'Remote (Office in Madison, WI)',
	descriptions: [
		{
			line: 'Design, develop, and improve the usability of internal tools used to build online PlayStation Store experiences.',
			sublines: [
				'Provide feedback on stories’ acceptance criteria and direction during planning and sprint ceremonies.',
				'Take on new feature development work and resolve technical debt.',
			],
		},
		{
			line: 'Build and maintain a robust testing automation foundation codebase to allow anyone to easily script application tests for the frontend.',
		},
		{
			line: 'Identify opportunities to increase testing coverage by thoroughly understanding code changes during the code review process.',
			sublines: [
				'Ensure the quality and relevancy of unit and component tests.',
			],
		},
	],
};

const epic: IExperience = {
	company: 'Epic Systems',
	title: 'Software Developer',
	startDate: new Date(2019, 6),
	endDate: new Date(2020, 11),
	location: 'Madison, WI',
	descriptions: [
		{
			line: 'Created a new web application for admitting, transferring, and discharging hospital inpatients to make efficient use of hospital bed space.',
		},
		{
			line: 'Lead the architecture and development of a new automated system which would assign patients to beds based on user-defined rulesets.',
			sublines: [
				'Work done for a customer in Singapore, requiring regular remote check-ins and design documentation reviews.',
			],
		},
		{
			line: 'Worked closely with UI/UX design and QA team members to ensure high quality of new functionality and usability while maintaining velocity.',
		},
	],
};

const cogworks: IExperience = {
	company: 'CogWorks Lab',
	title: 'AI Programmer/Researcher',
	startDate: new Date(2017, 1),
	endDate: new Date(2019, 4),
	location: 'Troy, NY',
	descriptions: [
		{
			line: 'Independent contributor in the Cognitive Science department.',
		},
		{
			line: 'Implemented functionality for cross-entropy reinforcement learning (CERL) models that modeled Tetris play to make decisions using information about future tetrominoes.',
		},
		{
			line: 'Studied how the CERL models could be used to understand human performance and expertise within Tetris.',
		},
	],
};

const experience = [
	dzx,
	epic,
	cogworks,
];

export function Resume() {
	return (
		<>
			<div className="center-format">
				<div className="spacer" aria-hidden></div>
				<div className="resume">
					{experience.map((exp, idx) => {
						return (
							<Experience information={exp} key={idx} />
						);
					})}
				</div>
				<div className="spacer" aria-hidden></div>
			</div>
		</>
	)
}