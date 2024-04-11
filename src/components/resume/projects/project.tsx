import { IDescription } from "../../shared/interfaces";

export interface IProject {
	name: string;
	link: string;
	languages: string[];
	descriptions: IDescription[];
}

export function Project(props: IProject) {
	const { name, link, languages, descriptions } = props;

	return (
		<>
			<div className="entry">
				<div className="entry-header">
					<h3>{name}</h3>
					<h3 className="mobile-hidden">/</h3>
					<a href={link} target="_blank" className="entry-link"><h3>on GitHub</h3></a>
				</div>
				<div className="entry-subheader">
					<h4>{languages.join(', ')}</h4>
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