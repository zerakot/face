function getGradient(ctx, chartArea, scales) {
	let gradient;
	const chartHeight = chartArea.bottom - chartArea.top;

	const pointzero = scales.y.getPixelForValue(0);
	const pointzeroHeight = pointzero - chartArea.top;
	const pointzeroPercentage = pointzeroHeight / chartHeight > 0 ? pointzeroHeight / chartHeight : 0;

	gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartHeight + chartArea.top);
	gradient.addColorStop(pointzeroPercentage, '#0071ad');
	gradient.addColorStop(pointzeroPercentage, '#e00000');
	return gradient;
}

export function generateLineConfig(props) {
	return {
		data: {
			datasets: [
				{
					label: 'Rotation',
					data: props.data,
					borderColor: (context) => {
						const chart = context.chart;
						const {ctx, chartArea, scales} = chart;

						if (!chartArea) return null;
						return getGradient(ctx, chartArea, scales);
					},
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				y: {
					beginAtZero: true,
					grid: {
						color: props.darkMode ? '#0b0b0b' : '#b9b9b9',
					},
				},
				x: {
					display: false,
				},
			},
			plugins: {
				legend: {
					display: false,
				},
				title: {
					display: false,
					text: 'Rotation',
					padding: {top: 5, bottom: 8},
				},
			},
			fill: false,
			tension: 0.4,
			borderWidth: 5,
		},
	};
}

export function generatePieChart(props) {
	return {
		data: {
			labels: ['Correct', 'Incorrect'],
			datasets: [
				{
					label: 'Radio',
					data: props.data,
					backgroundColor: ['#0071ad', '#e00000'],
				},
			],
			title: {
				display: true,
				text: 'Custom Chart Title',
			},
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false,
				},
				title: {
					display: false,
					text: 'Ratio',
					padding: {top: 5, bottom: 8},
				},
			},
			borderColor: props.darkMode ? '#0b0b0b' : '#b9b9b9',
		},
	};
}
