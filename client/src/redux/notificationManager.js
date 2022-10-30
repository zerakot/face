import {createSlice} from '@reduxjs/toolkit';

export const notificationsSlice = createSlice({
	name: 'notifications',
	initialState: {
		notificationData: {},
		timeout: false,
		notificationVisiblity: false,
	},
	reducers: {
		sendNotification: (state, action) => {
			console.log(action.payload);
			state.notificationData = action.payload;
			state.notificationVisiblity = true;
		},
		hideNotification: (state) => {
			state.notificationVisiblity = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const {sendNotification, hideNotification} = notificationsSlice.actions;

export default notificationsSlice.reducer;
