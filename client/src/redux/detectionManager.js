import {createSlice} from '@reduxjs/toolkit';

export const detectionSlice = createSlice({
	name: 'detection',
	initialState: {
		webcamReady: false,
		calibrationVisiblity: false,
		calibrationX: false,
		detectionState: false,
	},
	reducers: {
		showCalibration: (state) => {
			state.calibrationVisiblity = true;
		},
		hideCalibration: (state) => {
			state.calibrationVisiblity = false;
		},
		setCalibrationX: (state, action) => {
			state.calibrationX = action.payload;
		},
		setWebcamReady: (state) => {
			state.webcamReady = true;
			state.calibrationVisiblity = true;
		},
		toggleDetectionState: (state) => {
			console.log(state.detectionState);
			state.detectionState = !state.detectionState;
		},
	},
});

// Action creators are generated for each case reducer function
export const {showCalibration, hideCalibration, setCalibrationX, setWebcamReady, toggleDetectionState} = detectionSlice.actions;

export default detectionSlice.reducer;
