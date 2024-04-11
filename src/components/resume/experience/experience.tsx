import { IDescription } from '../../shared/interfaces';
import './experience.css';

export interface IExperience {
	company: string;
	title: string;
	startDate: Date;
	endDate?: Date;
	location: string;
	descriptions: IDescription[];
}

export function Experience(props: IExperience ) {
	const { title, company, startDate, endDate, location } = props;
	const { descriptions } = props;

	const startDateString = startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
	const endDateString = endDate ? endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'Present';
	return (
		<>
			<div className="entry">
				<div className="entry-header">
					<h3>{title}</h3>
					<h3 aria-hidden className="mobile-hidden">|</h3>
					<h3>{company}</h3>
				</div>
				<div className="entry-subheader">
					<h4>
						{startDateString} - {endDateString}
					</h4>
					<h4 aria-hidden className="mobile-hidden">|</h4>
					<h4>{location}</h4>
				</div>
				<ul className="entry-description">
					{descriptions.map((description, idx) => {
						return (
							<li key={idx} className="entry-description-line">
								{description.line}
								<ul className="entry-subdescription">
									{description.sublines?.map((line, idx) => {
										return (
											<li key={idx} className="entry-description-subline">
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