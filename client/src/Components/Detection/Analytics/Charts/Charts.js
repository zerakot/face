import { Line, Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { lineChartConfig, pieChartConfig} from "./configs";

export default function Charts(props){
    const pieData = {
        labels: ['Correct', 'Incorrect'],
        datasets: [{
            label: "Radio",
            data: [props.logs.filter(el=>el.y > 0).length, props.logs.filter(el=>el.y < 0).length],
            backgroundColor: [
                '#0071ad',
                '#e00000'
            ],
        }],
        title: {
            display: true,
            text: 'Custom Chart Title'
        }
    };

    function getGradient(ctx, chartArea, scales){
        let gradient;
        const chartHeight = chartArea.bottom - chartArea.top;
 
        const pointzero = scales.y.getPixelForValue(0);
        const pointzeroHeight = pointzero - chartArea.top;
        const pointzeroPercentage = pointzeroHeight / chartHeight;

        gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartHeight + chartArea.top);
        gradient.addColorStop(pointzeroPercentage, '#0071ad');
        gradient.addColorStop(pointzeroPercentage, '#e00000');

        return gradient;
    }

    const lineData = {
        datasets: [{
            label: "Rotation",
            data: [...props.logs].slice(-9),
            borderColor: (context)=>{
                const chart = context.chart;
                const { ctx, chartArea, scales } = chart;

                if(!chartArea) return null;
                return getGradient(ctx, chartArea, scales);
            }
        }]
    }

    return (
        <div className="charts">
            <div className="chart">
                <Line
                    data={lineData}
                    options={lineChartConfig}
                />
            </div>
            <div className="chart">
                <Doughnut
                    data={pieData}
                    options={pieChartConfig}
                />
            </div>
        </div>
    )
}