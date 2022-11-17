import './About.css';
import {ReactComponent as Section1} from '../../../medias/section1.svg';
import {ReactComponent as Section2} from '../../../medias/section2.svg';
import {ReactComponent as Section3} from '../../../medias/section3.svg';

export default function About() {
	return (
		<div className="about" id="about">
			<div className="section">
				<div className="box image">
					<Section1 />
				</div>
				<div className="box text">
					<h2>Artificial intelligence works for you</h2>
					<p>
						Your virtual assistant is always on standby to take care of your posture. Let the artificial intelligence monitor your head position and let you know when it needs to be
						corrected.
					</p>
				</div>
			</div>
			<div className="section">
				<div className="box image">
					<Section2 />
				</div>
				<div className="box text">
					<h2>Created by human for human</h2>
					<p>
						PostureAssistant was created by human for human. I am well aware of the consequences of humping while using a computer, so I created a tool to prevent them. Thank you for using
						it.
					</p>
				</div>
			</div>
			<div className="section">
				<div className="box image">
					<Section3 />
				</div>
				<div className="box text">
					<h2>Perfect for office work</h2>
					<p>PostureAssistant was designed with office work in mind. Keeping proper posture while using a computer for long periods of time is extremely important.</p>
				</div>
			</div>
		</div>
	);
}
