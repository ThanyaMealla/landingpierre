import {
	Wrapper,
	Content,
	TextInfo,
	Image,
	LogoContain,
	IconsSocial,
	IconFace,
	IconInsta,
	IconPhone,
	IconMail,
	IconLocation,
	IconAdress,
	ImageMap,
	ImageContainer,
} from "./SectionContact.styled";
import LogoPng from "../../logos/p1 blanco.png";

const SectionConatct = () => {
	return (
		<Wrapper id="SectionConatct">
			<LogoContain src={LogoPng} />

			<Content>
				{" "}
				<h1>Información de contacto</h1>
				<TextInfo>
					<div>
						<IconLocation />
						<h3>Área de servicio</h3>
						<p>San Salvador de Jujuy, Argentina</p>
					</div>
					<div>
						<IconPhone />
						<h3>Móvil</h3>
						<p>0388-477-8611</p>
					</div>
					<div>
						<IconMail />
						<h3>Correo electrónico</h3>
						<p>centroprofesionalpierre@gmail.com</p>
					</div>
					<div>
						<IconAdress />
						<h3>Dirección</h3>
						<p>San Martin 698, San Salvador de Jujuy, Argentina, 4600</p>
					</div>
				</TextInfo>
			</Content>
			<IconsSocial>
				<a href="https://www.facebook.com/CentroPIERRE" target="blank">
					<IconFace />
				</a>
				<a href="https://www.instagram.com/centropierre/" target="blank">
					<IconInsta />
				</a>
			</IconsSocial>
			<ImageContainer>
				<Image />
				<ImageMap />
			</ImageContainer>
		</Wrapper>
	);
};

export default SectionConatct;
