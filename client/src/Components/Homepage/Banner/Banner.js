import {Link} from 'react-router-dom';
import {ReactComponent as BannerSvg} from '../medias/banner.svg';
import './Banner.css';

export default function Banner() {
	return (
		<div className="banner">
			<BannerSvg />

			<div className="about">
				<h1>Let AI take care of your posture</h1>
				<p>
					<span>PostureAssistant.com</span> is an application that uses artificial intelligence to monitor your posture while working in front of a computer. Take care of your posture
					completely free.
				</p>
				<Link to="/app">
					<button className="getStarted">Get Started</button>
				</Link>
			</div>
		</div>
	);
}
