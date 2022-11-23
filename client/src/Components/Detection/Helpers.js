import axios from 'axios';

export async function detect(imageDataUrl) {
	try {
		const response = await axios.post(
			`http://localhost:3001/detect`,
			{imageDataUrl: imageDataUrl},
			{
				headers: {'Content-Type': 'application/json'},
			}
		);
		console.log(response);
		if (response.data.status === 'faceDetected') return response.data.pitch;
		if (response.data.status === 'noFaceDetected') return 'noFaceDetected';
		if (response.data.status === 'connectionError') return 'connectionError';
	} catch (err) {
		return 'connectionError';
	}
}
