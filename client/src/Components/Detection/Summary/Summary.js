import './Summary.css';
import {useDispatch, useSelector} from 'react-redux';

export default function Summary() {
	const dispatch = useDispatch();
	const {logs} = useSelector((state) => state.detection);

	return (
		<div className="summary">
			<div className="introduction">
				<h2>Thank you for being able to help</h2>
				<p>Let's see a summary of your work</p>
			</div>
			<div className="statistics">
				<div className="statistic">
					<div className="about">
						<h3>Lorem ipsum dolor sit</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit maxime.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
