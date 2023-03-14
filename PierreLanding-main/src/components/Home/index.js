import React from "react";
import About from "../about";
import Courses from "../courses section";
import { useRef } from "react";
const Home = () => {
	const coursesRef = useRef(null);
	const scrollToCourses = () => {
		coursesRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<About scrollToCourses={scrollToCourses}></About>
			<Courses ref={coursesRef} />
		</>
	);
};

export default Home;
