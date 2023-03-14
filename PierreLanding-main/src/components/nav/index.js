import React from "react";
import { Link } from "react-router-dom";
import { NavContainer, Ul, Li, Logo } from "./NavBar.Styled";
import LogoPng from "../../logos/p1 blanco.png";

const NavBar = () => {
	return (
		<NavContainer>
			<Logo src={LogoPng} />
			<Ul>
				<Li>
					<Link to="/">Inicio</Link>
				</Li>
				<Li>
					<Link to="/jobs">Oferta Laboral</Link>
				</Li>
			</Ul>
		</NavContainer>
	);
};
export default NavBar;
