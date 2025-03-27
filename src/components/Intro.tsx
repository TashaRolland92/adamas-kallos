const Intro: React.FC = () => {
	return(
		<section className="intro bg-babyblue">
			<div className="container mx-auto">
				<div className="grid grid-cols-2 gap-5 min-h-80">
					<div className="col">
						<h3 className="uppercase playfair text-lg">Introduction</h3>
					</div>
					<div className="col">
						<p className="playfair-italic-700 text-2xl">Welcome to Adamas Kallos, your ultimate destination for premium beauty treatments and services. Browse through a curated selection of services, book your next appointment with ease, and discover personalised beauty solutions that enhance your natural radiance.</p>
						<p>Your beauty journey starts here — let us help you look and feel your best!</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;