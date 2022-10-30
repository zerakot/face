const messages = {
	userMediaErrorNotify: {
		title: 'Unable to access camera',
		description: 'Make sure you have allowed the camera to capture video and that the camera is working properly.',
		delay: 15000,
	},
	connectionErrorNotify: {
		title: 'Server connection error',
		description: 'An error occurred while sending a request to the server. Make sure you are connected to the Internet. If so, try refreshing the page.',
		delay: 15000,
	},
	noFaceDetectedNotify: {
		title: 'No face detected',
		description: 'Please make sure your face is clearly visible in the camera. Also make sure that your face contrasts with the background.',
		delay: 15000,
	},
};
export default messages;
