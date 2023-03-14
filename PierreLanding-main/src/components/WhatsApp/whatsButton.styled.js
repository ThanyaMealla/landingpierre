import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";

export const StyledIcon = styled(BsWhatsapp)`
	color: ${({ theme }) => theme.secondary_2};
	position: fixed;
	padding: 0.2em;
	width: 60px;
	height: 60px;
	right: 20px;
	bottom: 250px;
	opacity: 0.5;
	animation: ease-in-out;
	transition: 1000;
	z-index: 1;
	:hover {
		opacity: 1;
		scale: 1.1;
	}
	@media screen and (max-width: 1000px) {
		bottom: 600px;
	}
	@media screen and (max-width: 1000px) {
		bottom: 200px;
	}
`;
