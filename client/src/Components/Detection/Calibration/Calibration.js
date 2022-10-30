import {useDispatch, useSelector} from 'react-redux';
import {sendNotification} from '../../../redux/notificationManager';
import {setCalibrationX, hideCalibration} from '../../../redux/detectionManager';

import messages from '../Notification/messages';
import {detect} from '../Helpers';
import './Calibration.css';

export default function Calibration(props) {
	const dispatch = useDispatch();
	const {webcamReady} = useSelector((state) => state.detection);
	const webcamRef = props.webcamRef;

	async function calibrateX() {
		const rotationValue = await detect(webcamRef);
		if (rotationValue === 'ConnectionError') {
			dispatch(sendNotification(messages.connectionErrorNotify));
			return;
		}

		if (rotationValue === 'NoFaceDetected') {
			dispatch(sendNotification(messages.noFaceDetectedNotify));
			return;
		}
		dispatch(setCalibrationX(rotationValue));
		dispatch(hideCalibration(false));
	}

	return (
		<div className="calibration-pointer-events-wrapper">
			<div className="calibration">
				<p>Point your head at the "Calibrate" button and press it to calibrate.</p>
				<button className="calibrate" onClick={calibrateX} disabled={!webcamReady}>
					Calibrate
				</button>
			</div>
		</div>
	);
}
