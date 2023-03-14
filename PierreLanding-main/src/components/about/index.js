import React from "react";
import HeroImage from "../heroImage/HeroImage";
import {
	Wrapper,
	Content,
	Text,
	BackTriangles,
	CallToAct,
} from "./about.styled";

const About = ({ scrollToCourses }) => {
	return (
		<Wrapper>
			<Content>
				<Text>
					<h1>Formando Verdaderos PROFESIONALES</h1>
					<p>
						Te impulsamos a insertarte y destacar en el mercado laboral mediante
						nuestros cursos de Formación Profesional
					</p>
					<CallToAct onClick={scrollToCourses}>
						Conoce nuestros cursos
					</CallToAct>
				</Text>
				<HeroImage />
			</Content>

			<BackTriangles />
		</Wrapper>
	);
};

export default About;
