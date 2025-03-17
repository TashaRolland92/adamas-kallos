import React from "react";

const Hero: React.FC = () => {
	return (
		<section className="hero-section relative h-screen w-full bg-hero-mobile md:bg-hero-desktop retina:md:bg-hero-4k bg-cover bg-center">
			<div className="hero-content absolute left-0 bottom-0 text-white m-6">
				<h1 className="playfair-italic-700 text-6xl sm:text-8xl md:text-9xl">Adamas</h1>
				<h2 className="playfair-italic-700 text-4xl sm:text-6xl lg:text-8xl mb-4">Kallos</h2>
				<h3 className="playfair uppercase text-2xl sm:text-4xl lg:6xl">Diamond Beauty</h3>
			</div>
			<button className="arrow-btn">
				<i></i>
			</button>
		</section>
	);
};

export default Hero;