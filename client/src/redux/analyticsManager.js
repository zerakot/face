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
			console.log(state.logs);
		},
	},
});

export const {toggleAnalyticsVisiblity, addLog} = analyticsSlice.actions;

export default analyticsSlice.reducer;

/* 
{
				x: '22:16:25',
				y: 1.3,
			},
			{
				x: '22:16:30',
				y: -3.2,
			},
			{
				x: '22:16:35',
				y: 6.7,
			},
			{
				x: '22:16:40',
				y: 2.1,
			},
			{
				x: '22:16:45',
				y: 0.2,
			},
			{
				x: '22:16:50',
				y: 2.5,
			},
			{
				x: '22:17:05',
				y: 5.3,
			},
			{
				x: '22:17:11',
				y: 9.1,
			},
			{
				x: '22:17:15',
				y: 5.1,
			},
			{
				x: '22:17:20',
				y: 3.1,
			},
			{
				x: '22:17:25',
				y: 2.1,
			},
			{
				x: '22:17:30',
				y: 0.2,
			},
			{
				x: '22:17:35',
				y: 2.5,
			},
 */
