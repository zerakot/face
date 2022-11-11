import Question from './Question';
import {ReactComponent as FaqSvg} from '../medias/faq.svg';
import './Faq.css';

export default function Faq() {
	return (
		<div className="faq" id="faq">
			<FaqSvg />

			<div className="questions">
				<Question
					title="Lorem ipsum dolor sit amet consectetur"
					answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam"
				/>
				<Question
					title="Lorem ipsum dolor sit amet consectetur"
					answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam"
				/>
				<Question
					title="Lorem ipsum dolor sit amet consectetur"
					answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam"
				/>
				<Question
					title="Lorem ipsum dolor sit amet consectetur"
					answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam"
				/>
				<Question
					title="Lorem ipsum dolor sit amet consectetur"
					answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam"
				/>
			</div>
		</div>
	);
}
