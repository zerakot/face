import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Webcam from 'react-webcam';

import Calibration from './Calibration/Calibration';
import {addLog} from '../../../redux/analyticsManager';
import {sendNotification} from '../../../redux/notificationManager';
import {setWebcamReady, toggleDetectionState} from '../../../redux/detectionManager';

import messages from '../Notification/messages';
import {detect} from '../Helpers';

import noFaceDetectedSound from '../audio/no_face_detected.mp3';
import alertSound from '../audio/alert.mp3';
import './WebcamPreview.css';

const videoConstraints = {
	width: 1280,
	height: 720,
};

export default function WebcamPreview(props) {
	const dispatch = useDispatch();
	const {calibrationX, calibrationVisiblity, detectionState, webcamReady} = useSelector((state) => state.detection);
	const {settings} = useSelector((state) => state.settings);
	const webcamRef = useRef(null);

	let noFaceDetectedAudio = new Audio(noFaceDetectedSound);
	let alertAudio = new Audio(alertSound);

	useEffect(() => {
		if (calibrationX !== false && detectionState) {
			let interval = setInterval(async () => {
				const rotationValue = await detect(webcamRef);
				if (rotationValue === 'ConnectionError') {
					dispatch(sendNotification(messages.connectionErrorNotify));
					dispatch(toggleDetectionState());
					return;
				}
				if (rotationValue === 'NoFaceDetected') {
					noFaceDetectedAudio.play();
					return;
				}
				//If the user has an incorrect posture
				if (rotationValue < calibrationX + settings.sensitivity) {
					alertAudio.play();
				}
				dispatch(
					addLog({
						x: new Date().toLocaleTimeString(),
						y: Math.round((rotationValue - (calibrationX + settings.sensitivity)) * 100) / 100,
					})
				);
			}, settings.detectionInterval * 1000);
			return () => clearInterval(interval);
		}
	}, [calibrationX, detectionState, settings.sensitivity, settings.detectionInterval]);

	return (
		<div className="webcamPreview">
			<Webcam
				audio={false}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				onUserMedia={() => dispatch(setWebcamReady())}
				onUserMediaError={() => dispatch(sendNotification(messages.userMediaErrorNotify))}
				videoConstraints={{...videoConstraints, deviceId: settings.cameraId}}
			/>
			{calibrationVisiblity && <Calibration webcamRef={webcamRef} />}
		</div>
	);
}
