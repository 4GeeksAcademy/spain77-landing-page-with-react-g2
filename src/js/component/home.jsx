import React from "react";
import { Navbar } from "./Navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card.jsx";
import { Landing } from "./Landing.jsx";
import { Button } from "./Button.jsx";
import { Footer } from "./Footer.jsx";
import { Spinner } from "./Spinner.jsx";
import { Alert } from "./alert.jsx";
import { Badge } from "./Badge.jsx";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Badge />
      <Spinner />
			<Alert />
			<Landing />
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<Card/>
			<Button />
			<Footer />
		</div>
	);
};

export default Home;
