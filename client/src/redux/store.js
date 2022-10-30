import {configureStore} from '@reduxjs/toolkit';
import detectionSlice from './detectionManager';
import notificationsSlice from './notificationManager';
import analyticsSlice from './analyticsManager';
import settingsSlice from './settingsManager';

export default configureStore({
	reducer: {
		notifications: notificationsSlice,
		detection: detectionSlice,
		analytics: analyticsSlice,
		settings: settingsSlice,
	},
});
