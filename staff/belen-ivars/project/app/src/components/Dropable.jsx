import { Container, Label } from "../library"

export default function Dropable({ options, title }) {

	return (
		<Container>
			<span><u>{title}</u></span>
			<ul id="checklist">
				{
					options.map((o, index) => (

						<li key={index}>

							<input
								type="checkbox"
								value={o}
							/>
							<Label>{o}</Label>
						</li>
					))
				}
			</ul>
		</Container>
	)
}