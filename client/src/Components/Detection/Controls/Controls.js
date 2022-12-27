import {useDispatch, useSelector} from 'react-redux';
import {pauseDetection, runDetection, showSummary} from '../../../redux/detectionManager';
import './Controls.css';

export default function Controls() {
	const dispatch = useDispatch();
	const {calibrationX, detectionState, calibrationVisiblity} = useSelector((state) => state.detection);
	const {logs} = useSelector((state) => state.analytics);

	return (
		<div className={calibrationX === false || calibrationVisiblity === true ? 'controls hide' : 'controls'}>
			<button onClick={() => (detectionState ? dispatch(pauseDetection()) : dispatch(runDetection()))} className={detectionState ? 'default-button red' : 'default-button green'}>
				{detectionState ? 'Pause' : 'Start'}
			</button>
			{logs.length > 1 && (
				<button className="default-button collapse" title="Finish" onClick={() => dispatch(showSummary())}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M12 18.292v1.834c.644.129 1.177.303 1.496.528.273.192.274.498 0 .69-1.494 1.053-7.498 1.054-8.993 0-.272-.191-.271-.499 0-.69.319-.225.852-.399 1.497-.528v-1.833c-2.363.481-4 1.511-4 2.707 0 1.657 3.134 3 7 3s7-1.343 7-3c0-1.196-1.637-2.226-4-2.708zm7.45-14.94c-2.73 0-2.791-2.352-5.961-2.352-1.382 0-2.679.518-3.489 1.022v-2.022h-2v21h2v-9.122c.934-.553 2.172-1.048 3.5-1.048 2.993 0 3.413 2.237 6.081 2.237 1.058 0 1.914-.415 2.419-.736v-9.779c-.537.342-1.46.8-2.55.8zm.55 4.67c-1.801.486-4.082-1.087-5-1.693v2.671s-1.758-.803-5 .739v-2.901c1.188-1.046 3.292-1.734 5-.508v-2.808c.785.615 2.575 1.737 4.45 1.737.189 0 .372-.012.55-.033v2.796z" />
					</svg>
					<span>Finish</span>
				</button>
			)}
		</div>
	);
}
