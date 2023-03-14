import React, { useState } from "react";
import useInterval from "../../Hooks/useInterval";
import { Image } from "./heroImage.styled";
import Bar from "../../logos/Bartender.jpg";
import Mani from "../../logos/Manicura.jpg";
import Barber from "../../logos/barber.jpg";
import Pestañas from "../../logos/pestañas.png";

const slides = [
	{ id: 0, url: Bar },
	{ id: 1, url: Mani },
	{ id: 2, url: Barber },
	{ id: 3, url: Pestañas },
];

const HeroImage = () => {
	const [index, set] = useState(0);
	const item = slides[index];
	const increment = () => set((state) => (state + 1) % slides.length);
	useInterval(increment, 4000);

	return <Image style={{ backgroundImage: `url(${item.url})` }} />;
};

export default HeroImage;
