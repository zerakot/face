import {createSlice} from '@reduxjs/toolkit';

export const analyticsSlice = createSlice({
	name: 'analytics',
	initialState: {
		logs: [],
		analyticsVisibility: false,
	},
	reducers: {
		toggleAnalyticsVisiblity: (state) => {
			state.analyticsVisibility = !state.analyticsVisibility;
		},
		addLog: (state, action) => {
			state.logs = [...state.logs, action.payload];
		},
	},
});

// Action creators are generated for each case reducer function
export const {toggleAnalyticsVisiblity, addLog} = analyticsSlice.actions;

export default analyticsSlice.reducer;
