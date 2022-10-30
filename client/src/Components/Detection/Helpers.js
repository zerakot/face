export const detect = async (webcamRef) => {
	const imageSrc = webcamRef.current.getScreenshot();
	try {
		const response = await fetch('http://127.0.0.1:5000/api/test', {
			method: 'POST',
			headers: {Accept: 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
			body: imageSrc,
		});
		const data = await response.json();

		if (data.results?.error === 'NoFaceDetected') return 'NoFaceDetected';
		return data.results.rotationX;
	} catch {
		return 'ConnectionError';
	}
};
