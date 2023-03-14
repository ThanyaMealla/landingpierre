import styled from "styled-components";
export const Image = styled.div`
	width: 50%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top 1000px;
	animation: ease-in-out;
	z-index: 3;
	@media screen and (max-width: 1000px) {
		visibility: collapse;
	}
`;
