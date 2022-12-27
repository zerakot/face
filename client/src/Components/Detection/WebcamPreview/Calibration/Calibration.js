import {useDispatch, useSelector} from 'react-redux';
import {sendNotification} from '../../../../redux/notificationManager';
import {setCalibrationX, hideCalibration, showCalibration} from '../../../../redux/detectionManager';

import messages from '../../Notification/messages';
import {detect} from '../../Helpers';
import './Calibration.css';

export default function Calibration(props) {
	const dispatch = useDispatch();
	const {calibrationX, webcamReady, calibrationVisiblity} = useSelector((state) => state.detection);
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
		<div className={'calibration' + (calibrationVisiblity ? '' : ' hide')}>
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

			<button className="default-button collapse recalibrate" onClick={() => dispatch(showCalibration())} title="Recalibrate">
				<svg clip-rule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="m3.508 6.726c1.765-2.836 4.911-4.726 8.495-4.726 5.518 0 9.997 4.48 9.997 9.997 0 5.519-4.479 9.999-9.997 9.999-5.245 0-9.553-4.048-9.966-9.188-.024-.302.189-.811.749-.811.391 0 .715.3.747.69.351 4.369 4.012 7.809 8.47 7.809 4.69 0 8.497-3.808 8.497-8.499 0-4.689-3.807-8.497-8.497-8.497-3.037 0-5.704 1.597-7.206 3.995l1.991.005c.414 0 .75.336.75.75s-.336.75-.75.75h-4.033c-.414 0-.75-.336-.75-.75v-4.049c0-.414.336-.75.75-.75s.75.335.75.75zm8.492 2.272c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"
						fillRule="nonzero"
					/>
				</svg>
				<span>Recalibrate</span>
			</button>
		</div>
	);
}
