import { Tooltip } from 'chart.js';
import json from '@/assets/json/data.json';

const data = {
    labels: [],
    datasets: [{
        label: 'Amount expended',
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
        borderRadius: 5,
        borderSkipped: false,
    }]
}

json.forEach(uniqueData => {
    data.labels.push(uniqueData.day);
    data.datasets[0].data.push(uniqueData.amount);
});

const labels = data.labels;
const bgArray = data.datasets[0].backgroundColor;
const hoverBgArray = data.datasets[0].hoverBackgroundColor;

const currentDay = new Date().toDateString().toLowerCase().split(' ')[0];
for (let i=0; i<labels.length; i++) {
    if (labels[i] === currentDay) {
        bgArray.push('hsl(186, 34%, 60%)');
        hoverBgArray.push('hsl(186, 53%, 74%)');
    } else {
        bgArray.push('hsl(10, 79%, 65%)');
        hoverBgArray.push('hsl(10, 73%, 72%)');
    }
}

Tooltip.positioners.customPosition = function(tooltipItems, data) {
    return {
      x: tooltipItems[0].element.x,
      y: tooltipItems[0].element.y - 5,
    };
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            backgroundColor: 'hsl(25, 47%, 15%)',
            padding: 6,
            caretSize: 0,
            displayColors: false,
            xAlign: 'center',
            yAlign: 'bottom',
            position: 'customPosition',
            bodyFont: {
                family: 'DM Sans',
                size: 18,
                weight: 700,
                lineHeight: 1.8
            },
            callbacks: {
                label: function(tooltipItems, data) {
                    console.log(tooltipItems);
                    return '$' + tooltipItems.formattedValue;
                },
                title: function() {},
            }
        },
    },
    scales: {
        y: {
            display:false,
            beginAtZero: true,
        },
        x:{
            grid: {
                display: false,
                borderColor: 'hsl(0, 0%, 100%)'
            },
            ticks: {
                color: 'hsl(28, 10%, 53%)',
                padding: 8
            }
        }
    }
}

const weeklyExpensesChart = {
    type: 'bar',
    data: data,
    options: options
}

export default weeklyExpensesChart;