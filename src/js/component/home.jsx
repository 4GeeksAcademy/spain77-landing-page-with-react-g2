import React from "react";
import { Navbar } from "./Navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
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
