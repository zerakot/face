export const lineChartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        },
        x: {
            display: false,
            gridLines: {
                zeroLineWidth: 3,
                zeroLineColor: "#ff0000",
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Rotation',
            padding: {top: 5, bottom: 8}
        }
    },
    fill: false,
    tension: 0.4,
    borderWidth: 5,
}


export const pieChartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Ratio',
            padding: {top: 5, bottom: 8}
        }
    }
}