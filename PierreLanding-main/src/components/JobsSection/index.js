import React from "react";
import items from "../../jobs.json";
import JobOffer from "../JobOffer";
import { Wrapper, JobContainer } from "./JobsSection.Styled";
import GetInContact from "../getInContact";

const JobsSection = () => {
	return (
		<Wrapper>
			<h1>Oferta laboral</h1>
			<a href="mailto:centroprofesionalpierre@gmail.com">
				¿Te gustaría formar parte de nuestro equipo de profesionales?
			</a>
			<p>
				Bienvenido a nuestra sección de búsqueda de talentos en Centro
				Profesional Pierre. En este momento estamos incorporando personas
				talentosas y comprometidas para unirse a nuestro equipo en diferentes
				áreas, como enseñanza, asesoramiento, ordenanzas, investigación y
				administración. Ofrecemos un excelente ámbito laboral
			</p>
			<JobContainer>
				{items &&
					items.map((item) => (
						<JobOffer key={item.key} content={item.content}></JobOffer>
					))}
			</JobContainer>
			<GetInContact />
		</Wrapper>
	);
};

export default JobsSection;
