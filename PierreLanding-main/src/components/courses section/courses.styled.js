import styled from "styled-components";

import image from "../../logos/courses.jpg";
import BackImage from "../../logos/fallback.png";

export const Wrapper = styled.div`
	min-height: 80vh;
	color: black;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 7em;
	background: ${({ theme }) => theme.primary};
	position: relative;
	isolation: isolate;
	background-image: linear-gradient(
		to top,
		${({ theme }) => theme.primary},
		${({ theme }) => theme.primary_varition}
	);

	::after {
		content: "";
		position: absolute;
		background-image: url(${BackImage});
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
		inset: 0;
		z-index: -1;
		opacity: 0.1;
		filter: blur(5px);
	}
`;
export const Content = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 5rem;
	padding-top: 3em;
	h1 {
		align-self: center;
		color: ${({ theme }) => theme.secondary_2};
		font-size: 4em;
	}
	@media screen and (max-width: 1000px) {
		gap: 1rem;
		padding: 0%;
		h1 {
			font-size: 3em;
			padding: 0.5em;
			text-align: center;
		}
		@media screen and (max-width: 1000px) {
			gap: 1rem;
			padding: 0%;
			h1 {
				font-size: 2em;
				padding: 0.5em;
				text-align: center;
			}
		}
	}
`;

export const CourseContain = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 1fr;
	gap: 2rem 2rem;
	@media screen and (max-width: 1600px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 500px) {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;
export const Image = styled.div`
	background-image: url(${image});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 400px;
	@media screen and (max-width: 1000px) {
		visibility: collapse;
	}
`;
