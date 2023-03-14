import styled from "styled-components";
import { hover } from "../../generalStyes/themePropvider";

export const NavContainer = styled.nav`
	background: ${({ theme }) => theme.primary};
	display: flex;
	align-items: stretch;
	flex-wrap: wrap;
	height: 100px;
	background-image: linear-gradient(
		to right,
		${({ theme }) => theme.primary},
		${({ theme }) => theme.primary_varition}
	);
`;

export const Ul = styled.ul`
	display: flex;
	list-style: none;

	margin-right: 5%;
	margin-left: 30px;
	@media screen and (max-width: 1000px) {
		margin-right: 0%;
	}
`;
export const Li = styled.li`
	li:active {
		background-color: green;
	}
	a {
		color: ${({ theme }) => theme.secondary_1};
		text-decoration: none;
		height: 100%;
		display: flex;
		align-items: flex-end;
		width: auto;
		padding: 0.5em;
		font-size: 1.5em;
		position: relative;
		z-index: 1;
	}

	a:hover {
		${hover}
	}

	a::before {
		content: "";
		position: absolute;
		background-image: linear-gradient(
			to top,
			${({ theme }) => theme.secondary_2},
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
	}
	a:hover::before {
		transform: scaley(1);
	}

	@media screen and (max-width: 400px) {
		font-size: 0.8rem;
		height: 100%;
	}
`;

export const Logo = styled.img`
	height: 100%;
	width: auto;
	padding: 0.5em;
	@media screen and (max-width: 1100px) {
		height: 80%;
		align-self: center;
	}
	@media screen and (max-width: 400px) {
		height: 60%;
		align-self: flex-end;
	}
	@media screen and (max-width: 300px) {
		visibility: collapse;
	}
`;
