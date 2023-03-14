import styled from "styled-components";

export const Li = styled.div`
	color: ${({ theme }) => theme.secondary_1};
	font-size: 1.5rem;
	display: flex;
	border: solid ${({ theme }) => theme.secondary_2_variation};

	padding: 1em;
	border-radius: 0.5em;
	background-image: linear-gradient(
		to top,
		${({ theme }) => theme.primary},
		${({ theme }) => theme.primary_varition}
	);

	@media screen and (max-width: 1550px) {
		font-size: 1.2rem;
	}

	@media screen and (max-width: 1000px) {
		font-size: 1rem;
		padding: 0.5em;
	}
	@media screen and (max-width: 500px) {
		font-size: 0.9rem;
		padding: 0.5em;
	}
`;
