import styled from "styled-components";

import triangles from "../../logos/trianglesBack.png";

export const Wrapper = styled.div`
	min-height: 85vh;
	color: black;
	display: flex;
	position: relative;
`;
export const BackTriangles = styled.div`
	width: 60%;
	height: 110%;
	position: absolute;
	z-index: -1;
	top: -50px;
	background-image: url(${triangles});
	background-repeat: no-repeat;
	background-size: cover;
	opacity: 0.4;
	@media screen and (max-width: 1000px) {
		width: 100%;
	}
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 0.5em;
`;

export const Text = styled.div`
	width: 50%;
	padding-top: 8em;
	padding-bottom: 10em;
	padding-left: 1em;
	display: flex;
	flex-direction: column;

	h1 {
		color: ${({ theme }) => theme.primary};
		font-size: 4em;
	}
	p {
		display: inline-block;
		margin: 0%;
		padding: 0;
		font-weight: 700;
		width: 100%;
		text-align: left;
		margin-top: 30px;
		font-size: 1.5em;
	}
	@media screen and (max-width: 1400px) {
		h1 {
			color: ${({ theme }) => theme.primary};
			font-size: 3em;
		}
		p {
			font-size: 1.2em;
		}
	}
	@media screen and (max-width: 1000px) {
		width: 100%;
	}
	@media screen and (max-width: 600px) {
		width: 100%;
		h1 {
			color: ${({ theme }) => theme.primary};
			font-size: 2.5em;
		}
		p {
			font-size: 1rem;
			padding-bottom: 3em;
		}
	}
`;
export const CallToAct = styled.button`
	position: relative;
	width: 300px;
	height: 100px;
	background-color: ${({ theme }) => theme.secondary_2_variation}; /* Green */
	border: none;
	color: ${({ theme }) => theme.secondary_2};
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
	border-radius: 0.5em;
	margin: auto;
	font-weight: 500;
	font-size: 1.5rem;
	isolation: isolate;

	::before {
		content: "";
		position: absolute;
		background-image: linear-gradient(
			to top,
			${({ theme }) => theme.primary_varition},
			${({ theme }) => theme.primary}
		);
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		transform-origin: bottom;
		transition: transform 400ms ease-in-out;
		transform: scaley(0);
		border-radius: 0.5em;
	}
	:hover::before {
		transform: scaley(1);
	}
	@media screen and (max-width: 1400px) {
		width: 250px;
		height: 100px;
		font-size: 1rem;
		font-weight: 700;
	}
	@media screen and (max-width: 600px) {
		width: 250px;
		height: 100px;
		font-size: 1rem;
		font-weight: 700;
	}
`;
