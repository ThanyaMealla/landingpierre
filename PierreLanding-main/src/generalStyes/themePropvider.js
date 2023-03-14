///imports
import React from "react";
import { ThemeProvider, css, keyframes } from "styled-components";

///
const theme = {
	primary: "#662486 ",
	primary_varition: "#2E0A40",
	secondary_1: "#dbcbe2",
	secondary_2: "#ffffff",
	secondary_2_variation: "#8a57a2",

	//fonts
	font_large: "2rem",
	font_medium: "1.5rem",
	font_small: "1.5rem",

	//animation
	ease_in_out: "ease-in-out 0.1s",
};

/// mixins

export const hover = css`
	:hover {
		color: ${({ theme }) => theme.primary};
		transition: ${({ theme }) => theme.ease_in_out};
	}
`;

export const Icons = css`
	color: ${({ theme }) => theme.secondary_1};
	width: 30px;
	height: 30px;
`;
export const buttons = css`
	border: transparent;
	width: 20%;
	height: 6rem;
	height: 3rem;
	width: 30%;
	margin: 2rem 0;
	font-size: 1.5rem;
	background: ${({ theme }) => theme.secondary_1};
	color: ${({ theme }) => theme.prymary};
	transition: ${({ theme }) => theme.ease_in_out};
	border: transparent;
	cursor: pointer;
	padding: 0.2rem;

	:hover {
		transform: scale(1.1);
		outline: none;
		opacity: 0.9;
		border: solid 4px;
		border-color: ${({ theme }) => theme.prymary};
	}

	:focus {
		transform: scale(1.1);
		outline: none;
		opacity: 0.9;
		border: solid 1px;
		border-color: ${({ theme }) => theme.prymary};
	}
`;
export const pulsating = keyframes`
 0% {
    scale:1 ;
  }
  100% {
   scale:1.2;
  }  
 
`;

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
