import React from "react";
import { HiMiniArrowTurnRightDown } from "react-icons/hi2";

type HeroProps = {
	children?: React.ReactNode; // this allows us to insert whatever content we wish and not be confined to the defaults
	showArrow?: boolean;
	className?: string;
	backgroundClass?: string;
};

const Hero = ({
	children,
	showArrow = true,
	className = '',
	backgroundClass = '',
}: HeroProps) => {
	return (
		<section className={`hero-section w-full flex items-end bg-cover bg-center ${backgroundClass || 'bg-hero-mobile md:bg-hero-desktop retina:md:bg-hero-4k'} ${className}`}>
			<div className="container mx-auto px-7">
				<div className="hero-content text-white pt-20 pb-6">
					{children}
				</div>
				{showArrow && (
					<button className="arrow-btn absolute bottom-4 right-2.5">
						<HiMiniArrowTurnRightDown className="text-white text-8xl w-16 md:w-24" />
					</button>
				)}
			</div>
		</section>
	);
};

export default Hero;