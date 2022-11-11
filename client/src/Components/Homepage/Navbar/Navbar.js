import ScrollIntoView from 'react-scroll-into-view';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="logo">Logo</div>
			<ul className="links">
				<li>
					<ScrollIntoView selector="#about" scrollOptions={{block: 'start'}}>
						About
					</ScrollIntoView>
				</li>
				<li>
					<ScrollIntoView selector="#donate" scrollOptions={{block: 'center'}}>
						Donate
					</ScrollIntoView>
				</li>
				<li>
					<ScrollIntoView selector="#faq" scrollOptions={{block: 'center'}}>
						FAQ
					</ScrollIntoView>
				</li>
				<li className="getStarted">
					<Link to="/app">Get started</Link>
				</li>
			</ul>
		</div>
	);
}