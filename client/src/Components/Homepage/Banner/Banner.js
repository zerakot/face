import {Link} from 'react-router-dom';
import {ReactComponent as BannerSvg} from '../medias/banner.svg';
import './Banner.css';

export default function Banner() {
	return (
		<div className="banner">
			<BannerSvg />

			<div className="about">
				<h1>Lorem ipsum dolor sit amet consectetur</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
					quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
				</p>
				<Link to="/app">
					<button className="getStarted">Get Started</button>
				</Link>
			</div>
		</div>
	);
}
