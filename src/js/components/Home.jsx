import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import CardRow from "./CardRow";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<CardRow />
			<Footer />
		</>
	);
};

export default Home;