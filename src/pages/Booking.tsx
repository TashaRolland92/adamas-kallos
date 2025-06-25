import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TreatmentCategories from "../components/booking/steps/TreatmentCategories";

const Booking = () => {
	const [step, setStep] = useState(1);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const goNext = () => setStep((prev) => Math.min(prev + 1, 5));
	const goBack = () => setStep((prev) => Math.max(prev - 1, 1));

	return (
		<>
			<Header />
			<Hero backgroundClass="bg-booking-hero-mobile md:bg-booking-hero-desktopretina:md:bg-booking-hero-4k h-50vh bg-bottom">
				<h1 className="playfair-italic-700 text-4xl sm:text-5xl lg:text-6xl mb-2">Book Online</h1>
				<p className="playfair text-2xl sm:text-2xl lg:4xl">Browse our treatments and book yours in just a few clicks...</p>
			</Hero>
			<div className="mt-20 p-4 max-w-xl mx-auto">
				<h1 className="text-2xl font-semibold mb-4 text-center playfair-600 uppercase">Book an Appointment</h1>

				{step === 1 && (
					<>
						<div>Step 1: Select a service</div>
						<TreatmentCategories onSelectedCategory={(categoryId) => setSelectedCategory(categoryId)} />
					</>
				)}
				{step === 2 && <div>Step 2: Choose staff (optional)</div>}
				{step === 3 && <div>Step 3: Pick a time slot</div>}
				{step === 4 && <div>Step 4: Enter your details</div>}
				{step === 5 && <div>Step 5: Confirm booking</div>}

				<div className="flex justify-between mt-6">
					<button
						className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
						onClick={goBack}
						disabled={step === 1}
					>
						Back
					</button>
					<button
						className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:text-gray-500"
						onClick={goNext}
						disabled={step === 5}
					>
						Next
					</button>
				</div>
			</div>
		</>
	);
};

export default Booking;