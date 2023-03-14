import React from "react";
import List from "../ListComponent/index";

import { Wrapper, Content, CourseContain, Image } from "./courses.styled";
import items from "../../coursesList.json";

const Courses = React.forwardRef((props, ref) => {
	return (
		<Wrapper>
			<Image />
			<Content ref={ref}>
				<h1>Un curso para cada gusto</h1>
				<CourseContain>
					{items &&
						items.map((item) => (
							<List key={item.key} content={item.content}></List>
						))}
				</CourseContain>
			</Content>
		</Wrapper>
	);
});

export default Courses;
