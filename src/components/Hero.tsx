import React from "react";
import { HiMiniArrowTurnRightDown } from "react-icons/hi2";

const Hero: React.FC = () => {
	return (
		<section className="hero-section h-screen w-full flex items-end bg-hero-mobile md:bg-hero-desktop retina:md:bg-hero-4k bg-cover bg-center">
			<div className="container mx-auto px-7">
				<div className="hero-content text-white pt-20 pb-6">
					<h1 className="playfair-italic-700 text-6xl sm:text-8xl md:text-9xl">Adamas</h1>
					<h2 className="playfair-italic-700 text-4xl sm:text-6xl lg:text-8xl mb-2">Kallos</h2>
					<h3 className="playfair uppercase text-2xl sm:text-4xl lg:6xl">Diamond Beauty</h3>
				</div>
				<button className="arrow-btn absolute bottom-4 right-2.5">
					<HiMiniArrowTurnRightDown className="text-white text-8xl w-16 md:w-24" />
				</button>
			</div>
		</section>
	);
};

export default Hero;