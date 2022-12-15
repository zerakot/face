import './Summary.css';
import DeviationChart from './Assets/DeviationChart';
import {useDispatch, useSelector} from 'react-redux';
import {hideSummary} from '../../../redux/detectionManager';
import Achievements from './Assets/Achievements';

function formatTime(timestamp) {
	let seconds = timestamp / 1000;
	const hours = ('0' + parseInt(seconds / 3600)).slice(-2);
	seconds = seconds % 3600;
	const minutes = ('0' + parseInt(seconds / 60)).slice(-2);
	seconds = ('0' + (seconds % 60)).slice(-2);

	return hours + ':' + minutes + ':' + seconds;
}

export default function Summary() {
	const dispatch = useDispatch();
	const {workTime} = useSelector((state) => state.detection);

	return (
		<div className="summary">
			<div className="introduction">
				<h2>Thank you for being able to help</h2>
				<p>Let's see a summary of your work</p>
			</div>
			<Achievements />
			<div className="statistics">
				<div className="statistic">
					<div className="about">
						<h3>Work time</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit maxime.</p>
					</div>
					<div className="workTime">{formatTime(workTime)}</div>
				</div>
				<div className="statistic">
					<div className="about">
						<h3>Posture deviation chart</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit maxime.</p>
					</div>

					<DeviationChart />
				</div>
			</div>
			<div className="navigation">
				<button className="default-button" onClick={() => dispatch(hideSummary())}>
					Back to work
				</button>
			</div>
		</div>
	);
}
