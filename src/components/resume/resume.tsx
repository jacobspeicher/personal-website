import { IDescription } from "../shared/interfaces";
import { Experience } from "./experience/experience";
import ExperienceJSON from './experience/experience.json';
import { IProject, Project } from "./projects/project";
import ProjectJSON from "./projects/projects.json";
import './resume.css';

interface IExperienceJSON {
	company: string;
	title: string;
	startDate: DateJSON;
	endDate?: DateJSON;
	location: string;
	descriptions: IDescription[];
}

interface DateJSON {
	year: number;
	month: number;
}

function renderContent(type: 'experience'|'projects') {
	if (type === 'experience') {
		return (
			ExperienceJSON.experience.map((exp: IExperienceJSON, idx: number) => {
				const startDate = new Date(exp.startDate.year, exp.startDate.month);
				const endDate = exp.endDate ? new Date(exp.endDate.year, exp.endDate.month) : undefined;
				return (
					<Experience
						company={exp.company}
						title={exp.title}
						startDate={startDate}
						endDate={endDate}
						location={exp.location}
						descriptions={exp.descriptions}
						key={idx}
					/>
				);
			})
		)
	}

	if (type === 'projects') {
		return (
			ProjectJSON.projects.map((project: IProject, idx: number) => {
				return (
					<Project
						name={project.name}
						link={project.link}
						languages={project.languages}
						descriptions={project.descriptions}
						key={idx}
					/>
				)
			})
		)
	}
}

export function Resume(props: { type: 'experience' | 'projects' }) {
	return (
		<>
			<div className="center-format">
				<div className="spacer" aria-hidden></div>
				<div className="resume">
					{renderContent(props.type)}
				</div>
				<div className="spacer" aria-hidden></div>
			</div>
		</>
	)
}