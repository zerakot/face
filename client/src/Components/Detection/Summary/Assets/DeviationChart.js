import React from 'react';
import {useSelector} from 'react-redux';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {generateLineConfig} from '../../Analytics/Charts/configs';

export default function DeviationChart() {
	const {settings} = useSelector((state) => state.settings);
	const {logs} = useSelector((state) => state.analytics);

	const data = generateLineConfig({data: logs, darkMode: settings.darkMode});

	return (
		<div className="deviationChart">
			<Line {...data} />
		</div>
	);
}
