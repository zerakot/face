import {useState} from 'react';
import './Faq.css';

export default function Question(props) {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div className={collapsed === false ? 'question' : 'question collapsed'}>
			<div className="summary" onClick={() => setCollapsed((p) => !p)}>
				<h3 className="title">{props.title}</h3>
				<svg clip-rule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="m11.998 21.995c5.517 0 9.997-4.48 9.997-9.997 0-5.518-4.48-9.998-9.997-9.998-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997zm0-1.5c-4.69 0-8.498-3.807-8.498-8.497s3.808-8.498 8.498-8.498 8.497 3.808 8.497 8.498-3.807 8.497-8.497 8.497zm4.845-6.711c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291zm-7.564-.289h5.446l-2.718-3.522z"
						fillRule="nonzero"
					/>
				</svg>
			</div>

			<p>{props.answer}</p>
		</div>
	);
}
