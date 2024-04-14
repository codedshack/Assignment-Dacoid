// const chart = document.getElementById('chart').getContext('2d');
// const chartData = {
//     labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
//     datasets: [{
//         label: 'Calories Burned',
//         data: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150],
//         borderColor: 'rgba(75, 192, 192, 1)',
//         fill: false
//     }]
// };

// const chartConfig = {
//     type: 'bar', // Change the chart type to 'bar'
//     data: chartData,
//     options: {
//         responsive: true,
//         scales: {
//             x: {
//                 display: true,
//                 title: {
//                     display: true,
//                     text: 'Time'
//                 }
//             },
//             y: {
//                 display: true,
//                 title: {
//                     display: true,
//                     text: 'Calories Burned'
//                 }
//             }
//         }
//     }
// };

// const myChart = new Chart(chart, chartConfig);
const chart = document.getElementById('chart').getContext('2d');
const chartData = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    datasets: [{
        label: 'Calories Burned',
        data: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false
    }]
};

const chartConfig = {
    type: 'bar',
    data: chartData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Calories Burned'
                }
            }
        }
    }
};

const myChart = new Chart(chart, chartConfig);

// Set the chart size according to the page size
const chartContainer = document.getElementById('chart-container');
const chartWidth = chartContainer.offsetWidth;
const chartHeight = chartContainer.offsetHeight;

chart.canvas.width = chartWidth;
chart.canvas.height = chartHeight;

// Update the chart with the new size
myChart.update();