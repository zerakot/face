import {useDispatch, useSelector} from 'react-redux';
import {showCalibration, toggleDetectionState} from '../../../redux/detectionManager';
import './Controls.css';

export default function Controls() {
	const dispatch = useDispatch();
	const {detectionState, calibrationVisiblity} = useSelector((state) => state.detection);

	return (
		<div className="controls">
			<button onClick={() => dispatch(toggleDetectionState())} className={detectionState ? 'default-button red' : 'default-button green'}>
				{detectionState ? 'Pause' : 'Start'}
			</button>
			<button className="default-button" onClick={() => dispatch(showCalibration())} disabled={calibrationVisiblity}>
				Recalibrate
			</button>
		</div>
	);
}
