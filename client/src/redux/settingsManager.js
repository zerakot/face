import {createSlice} from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		settings: {
			sensitivity: -8,
			detectionInterval: 5,
			cameraId: '',
			darkMode: true,
		},
		availableWebcams: [],
	},
	reducers: {
		loadSettings: (state) => {
			const loadSettings = JSON.parse(localStorage.getItem('settings'));
			if (loadSettings === null) return;
			console.log({...state.settings, ...loadSettings});
			state.settings = {...state.settings, ...loadSettings};
		},
		updateSettings: (state, action) => {
			const formatedValue = !isNaN(action.payload.value) && typeof action.payload.value !== 'boolean' ? parseInt(action.payload.value) : action.payload.value;
			const newSettings = {...state.settings, [action.payload.name]: formatedValue};

			localStorage.setItem('settings', JSON.stringify({...newSettings, cameraId: ''}));
			state.settings = newSettings;
		},
		setAvailableWebcams: (state, action) => {
			state.availableWebcams = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {loadSettings, updateSettings, setAvailableWebcams} = settingsSlice.actions;

export default settingsSlice.reducer;
