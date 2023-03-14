import styled from "styled-components";
import { Icons } from "../../generalStyes/themePropvider";
import location_1 from "../../logos/pierreLocation.png";
import Map from "../../logos/map.png";
import {
	FaFacebookF,
	FaInstagram,
	FaPhoneAlt,
	FaMailBulk,
	FaSearchLocation,
	FaBuilding,
} from "react-icons/fa";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: ${({ theme }) => theme.primary_varition};
	color: ${({ theme }) => theme.fonts_color_ligth};
	padding: 0 2rem;
	@media screen and (max-width: 1500px) {
		height: 80%;
		padding: 0 10px;
	}
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		padding-top: 2em;
	}
`;
export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 50%;
	gap: 1rem;

	h1 {
		font-size: 2rem;
		color: ${({ theme }) => theme.secondary_2_variation};
	}

	@media screen and (max-width: 1000px) {
		display: flex;
		align-items: center;
		flex-direction: row;
		padding: 1rem;
		font-size: 1.2rem;
		h1 {
			font-size: 1.2rem;
		}
		@media screen and (max-width: 1000px) {
			width: 100%;
		}
	}
`;
export const TextInfo = styled.div`
	display: flex;

	width: 100%;
	flex-direction: row;
	gap: 1rem;
	padding: 0.5em;
	div {
		h3 {
			font-size: 0.8em;
			color: ${({ theme }) => theme.secondary_1};
		}
		p {
			font-size: 0.6em;
			color: ${({ theme }) => theme.secondary_2_variation};
		}

		@media screen and (max-width: 1000px) {
			width: 100%;
		}
	}
	@media screen and (max-width: 600px) {
		font-size: 1rem;
		flex-wrap: wrap;
	}
`;
export const IconsSocial = styled.div`
	display: flex;
	width: 10%;
	height: 50px;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	@media screen and (max-width: 1500px) {
		flex-direction: column;
		justify-content: center;
		width: 5%;
		height: 100px;
	}
	@media screen and (max-width: 1000px) {
		flex-direction: row;
		justify-content: space-around;
		width: 50%;
		height: 100px;
	}
`;
export const Image = styled.div`
	width: 200px;
	height: 200px;
	background-image: url(${location_1});
	background-size: cover;
	@media screen and (max-width: 1500px) {
		padding: 1em;
		width: 100px;
		height: 200px;
	}
`;

export const IconFace = styled(FaFacebookF)`
	${Icons}
`;
export const IconInsta = styled(FaInstagram)`
	${Icons}
`;

export const IconPhone = styled(FaPhoneAlt)`
	${Icons}
`;
export const IconMail = styled(FaMailBulk)`
	${Icons}
`;
export const IconLocation = styled(FaSearchLocation)`
	${Icons}
`;
export const IconAdress = styled(FaBuilding)`
	${Icons}
`;

export const ImageContainer = styled.div`
	display: flex;
	@media screen and (max-width: 600px) {
		width: 90%;
		align-items: center;
		justify-content: center;
	}
`;

export const ImageMap = styled.div`
	width: 300px;
	height: 200px;
	background-image: url(${Map});
	background-size: cover;
`;
export const LogoContain = styled.img`
	width: 250px;
	height: 200px;
	padding: 3em;
	@media screen and (max-width: 1500px) {
		padding: 1em;
		width: 150px;
		height: 100px;
	}
	@media screen and (max-width: 1500px) {
		padding: 0%;
		width: 75px;
		height: 50px;
	}
`;
