import {useDispatch, useSelector} from 'react-redux';
import {sendNotification} from '../../../../redux/notificationManager';
import {setCalibrationX, hideCalibration} from '../../../../redux/detectionManager';

import messages from '../../Notification/messages';
import {detect} from '../../Helpers';
import './Calibration.css';

export default function Calibration(props) {
	const dispatch = useDispatch();
	const {calibrationX, webcamReady} = useSelector((state) => state.detection);
	const webcamRef = props.webcamRef;

	async function calibrateX() {
		const response = await detect(webcamRef.current.getScreenshot());
		if (response === 'noFaceDetected') {
			dispatch(sendNotification(messages.noFaceDetectedNotify));
			return;
		}
		if (response === 'connectionError') {
			dispatch(sendNotification(messages.noFaceDetectedNotify));
			return;
		}

		const pitch = response;
		dispatch(setCalibrationX(parseFloat(pitch)));
		dispatch(hideCalibration());
	}

	return (
		<div className="calibration">
			<p>Point your head at the "Calibrate" button and press it to calibrate.</p>
			<div className="buttons">
				{calibrationX !== false && (
					<button className="default-button red" onClick={() => dispatch(hideCalibration())}>
						Cancel
					</button>
				)}
				<button className="default-button" onClick={calibrateX} disabled={!webcamReady}>
					Calibrate
				</button>
			</div>
		</div>
	);
}
