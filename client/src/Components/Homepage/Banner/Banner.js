import {Link} from 'react-router-dom';
import {ReactComponent as BannerSvg} from '../../../medias/banner.svg';
import './Banner.css';

export default function Banner() {
	return (
		<div className="banner">
			<BannerSvg />

			<div className="about">
				<h1>Let AI take care of your posture</h1>
				<p>
					<span>PostureAssistant</span> is a tool that allows you to take care of your healthy posture while working at the computer. Using artificial intelligence, the application monitors
					your posture and tells you when to correct it.
				</p>
				<Link to="/app">
					<button className="getStarted">Get Started</button>
				</Link>
			</div>
		</div>
	);
}
