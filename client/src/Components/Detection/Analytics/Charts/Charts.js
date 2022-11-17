import {Line, Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {generateLineConfig, generatePieChart} from './configs';
import {useSelector} from 'react-redux';

export default function Charts(props) {
	const {settings} = useSelector((state) => state.settings);
	console.log(props.logs);

	const pieData = generatePieChart({data: [props.logs.filter((el) => el.y > 0).length, props.logs.filter((el) => el.y < 0).length], darkMode: settings.darkMode});
	const lineProps = generateLineConfig({data: [...props.logs].slice(-9), darkMode: settings.darkMode});

	return (
		<div className="charts">
			<div className="chart">
				<Line {...lineProps} />
			</div>
			<div className="chart">
				<Doughnut {...pieData} />
			</div>
		</div>
	);
}
