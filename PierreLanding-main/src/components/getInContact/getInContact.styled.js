import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { pulsating } from "../../generalStyes/themePropvider";

export const Container = styled.div`
	align-self: center;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	width: 50%;
	height: 50%;
	a {
		color: ${({ theme }) => theme.primary};
		font-size: 1.7rem;
		font-weight: 700;
		display: inline-block;
		text-align: center;
	}
	p {
		width: 100%;

		display: inline;
	}

	@media screen and (max-width: 1000px) {
		width: 100%;
		a {
			font-size: 1.2rem;
			font-weight: 700;
		}
		span {
			font-size: 1rem;
		}
	}
`;

export const ContinerLinks = styled.div`
	width: fit-content;
	align-self: center;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	font-size: 3em;
	p {
		font-size: 1em;
		width: fit-content;
	}
	div {
		display: flex;
		align-items: center;
		flex-direction: row;
	}

	span {
		display: inline;
		color: ${({ theme }) => theme.primary};
		font-weight: 700;
		font-size: 1.5rem;
	}
	@media screen and (max-width: 1000px) {
		width: 100%;

		p {
			font-size: 0.4em;
			padding: 0;
		}
		div {
			flex-direction: column;
			align-items: center;
		}
	}
`;

export const WhaIcon = styled(BsWhatsapp)`
	width: 80px;
	height: 80px;
	color: ${({ theme }) => theme.primary};
	font-size: 2rem;
	font-weight: 700;
	padding: 10px;
	animation: ${pulsating};
	animation-duration: 3s;
	animation-iteration-count: infinite;
`;
export const Arrow = styled(BsFillArrowRightCircleFill)`
	width: 90px;
	height: 90px;
	color: ${({ theme }) => theme.secondary_2};
	padding: 20px;
`;
