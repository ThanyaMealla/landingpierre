import styled from "styled-components";

export const Job = styled.li`
	color: ${({ theme }) => theme.secondary_1};
	font-size: 1.5rem;
	display: flex;
	border: solid ${({ theme }) => theme.secondary_2_variation};
	padding: 1em;
	border-radius: 0.5em;
	font-weight: 600;
	background-image: linear-gradient(
		to top,
		${({ theme }) => theme.primary},
		${({ theme }) => theme.primary_varition}
	);
	@media screen and (max-width: 1500px) {
		padding: 10px;
		font-size: 1.2rem;
	}
	@media screen and (max-width: 1000px) {
		padding: 10px;
		font-size: 1rem;
	}
`;
