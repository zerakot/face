import './About.css';
import {ReactComponent as Section1} from '../medias/section1.svg';
import {ReactComponent as Section2} from '../medias/section2.svg';
import {ReactComponent as Section3} from '../medias/section3.svg';

export default function About() {
	return (
		<div className="about" id="about">
			<div className="section">
				<div className="box image">
					<Section1 />
				</div>
				<div className="box text">
					<h2>Lorem ipsum dolor sit amet consectetur</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
						quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
					</p>
				</div>
			</div>
			<div className="section">
				<div className="box image">
					<Section2 />
				</div>
				<div className="box text">
					<h2>Lorem ipsum dolor sit amet consectetur</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
						quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
					</p>
				</div>
			</div>
			<div className="section">
				<div className="box image">
					<Section3 />
				</div>
				<div className="box text">
					<h2>Lorem ipsum dolor sit amet consectetur</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
						quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
					</p>
				</div>
			</div>
		</div>
	);
}
