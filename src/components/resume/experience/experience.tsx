import './experience.css';

export interface IExperience {
	company: string;
	title: string;
	startDate: Date;
	endDate?: Date;
	location: string;
	descriptions: IExperienceDescription[];
}

export interface IExperienceDescription {
	line: string;
	sublines?: string[];
}

export function Experience(props: { information: IExperience }) {
	const { title, company, startDate, endDate, location } = props.information;
	const { descriptions } = props.information;

	const startDateString = startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
	const endDateString = endDate ? endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'Present';
	return (
		<>
			<div className="experience">
				<div className="experience-header">
					<h3>{title}</h3>
					<h3 aria-hidden className="mobile-hidden">|</h3>
					<h3>{company}</h3>
				</div>
				<div className="experience-lt">
					<h4>
						{startDateString} - {endDateString}
					</h4>
					<h4 aria-hidden className="mobile-hidden">|</h4>
					<h4>{location}</h4>
				</div>
				<ul className="experience-description">
					{descriptions.map((description, idx) => {
						return (
							<li key={idx} className="experience-description-line">
								{description.line}
								<ul className="experience-subdescription">
									{description.sublines?.map((line, idx) => {
										return (
											<li key={idx} className="experience-description-subline">
												{line}
											</li>
										);
									})}
								</ul>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	)
}