import {useDispatch, useSelector} from 'react-redux';
import {showCalibration, toggleDetectionState} from '../../../redux/detectionManager';
import './Controls.css';

export default function Controls() {
	const dispatch = useDispatch();
	const {detectionState} = useSelector((state) => state.detection);

	return (
		<div className="controls">
			<button onClick={() => dispatch(toggleDetectionState())} className={detectionState ? 'pause' : 'start'}>
				{detectionState ? 'Pause' : 'Start'}
			</button>
			<button onClick={() => dispatch(showCalibration())}>Recalibrate</button>
		</div>
	);
}
