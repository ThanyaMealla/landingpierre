import styled from "styled-components";

import triangles2 from "../../logos/background2.png";

export const Wrapper = styled.div`
	min-height: 80vh;
	color: black;
	display: flex;
	flex-direction: column;
	padding: 2em;
	background-image: url(${triangles2});
	background-repeat: no-repeat;
	background-size: cover;

	h1 {
		color: ${({ theme }) => theme.primary};
		font-size: 4em;
	}
	a {
		color: ${({ theme }) => theme.primary};
		font-size: 2em;
		text-decoration: none;
		color: ${({ theme }) => theme.secondary_1};
	}
	p {
		color: ${({ theme }) => theme.secondary_1};
		margin: 0;
		width: 50%;
		padding-top: 2em;
		padding-bottom: 2em;
		padding-left: 1em;
		display: flex;
		flex-direction: column;
		font-size: 1.2rem;
	}
	@media screen and (max-width: 1200px) {
		p {
			width: 100%;
		}
	}

	@media screen and (max-width: 600px) {
		h1 {
			font-size: 3em;
		}
		p {
			font-size: 1rem;
		}
	}
`;
export const JobContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 1fr;
	gap: 2rem 2rem;
	padding: 3em;
	@media screen and (max-width: 1500px) {
		grid-template-columns: repeat(4, 1fr);
		padding: 2em;
	}
	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
	}
`;
