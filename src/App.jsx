import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

function App() {

	return (
		<>
			<div>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/treatments">Treatments</Link>
					<Link to="/booking">Book Online</Link>
					<Link to="/contact">Contact</Link>
				</nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/treatments" element={<Treatments />} />
					<Route path="/booking" element={<Booking />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
