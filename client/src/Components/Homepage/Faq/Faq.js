import Question from './Question';
import {ReactComponent as FaqSvg} from '../../../medias/faq.svg';
import './Faq.css';

export default function Faq() {
	return (
		<div className="faq" id="faq">
			<FaqSvg />

			<div className="questions">
				<Question
					title="Is PostureAssistant free?"
					answer="Yes, PostureAssistant is completely free. If you want you can support me on one of the platforms shown below in the Donate section."
				/>
				<Question
					title="How to use PostureAssistant?"
					answer='Using PostureAssistant is very intuitive. To get started, sit in the correct position in front of the computer. Then press the "Calibrate" button. You can adjust the settings according to your preferences. Finally, press the "Start" button.'
				/>
				<Question
					title="Will PostureAssistant decrease the performance of my computer?"
					answer="No. All costly operations are performed on the server, which means that your device is not burdened by them."
				/>
				<Question
					title="How can I support you?"
					answer="Glad you asked :) You can donate to me through the Patronite and Buy Me a Coffee platforms. Read more about it in the Donate section below."
				/>
			</div>
		</div>
	);
}
