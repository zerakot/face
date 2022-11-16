import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import About from './About/About';
import Faq from './Faq/Faq';
import Donate from './Donate/Donate';
import Footer from './Footer/Footer';
import './Homepage.css';

export default function Homepage() {
	return (
		<div className="homepage">
			<Navbar />
			<Banner />
			<About />
			<Faq />
			<Donate />
			<Footer />
		</div>
	);
}
