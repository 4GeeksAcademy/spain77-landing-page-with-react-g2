import React from "react";
import { Navbar } from "./Navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card.jsx";
import { Landing } from "./Landing.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Landing />
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<Card/>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
