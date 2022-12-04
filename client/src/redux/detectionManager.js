import {createSlice} from '@reduxjs/toolkit';

export const detectionSlice = createSlice({
	name: 'detection',
	initialState: {
		workTime: 0,
		webcamReady: false,
		calibrationVisiblity: false,
		calibrationX: false,
		detectionState: false,
		summaryVisiblity: false,
	},
	reducers: {
		runDetection: (state) => {
			state.detectionState = true;
			if (state.workTime > 0) return;
			state.workTime = new Date().getTime();
		},
		pauseDetection: (state) => {
			state.detectionState = false;
		},
		setWebcamReady: (state) => {
			state.webcamReady = true;
			state.calibrationVisiblity = true;
		},
		showCalibration: (state) => {
			state.calibrationVisiblity = true;
		},
		hideCalibration: (state) => {
			state.calibrationVisiblity = false;
		},
		setCalibrationX: (state, action) => {
			state.calibrationX = action.payload;
		},
		showSummary: (state) => {
			state.summaryVisiblity = true;
		},
		hideSummary: (state) => {
			state.summaryVisiblity = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const {showCalibration, hideCalibration, setCalibrationX, setWebcamReady, runDetection, pauseDetection, showSummary, hideSummary} = detectionSlice.actions;

export default detectionSlice.reducer;
