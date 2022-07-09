<template>
    <div>
        <canvas id="expenses-chart"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto'
import weeklyExpensesChart from '@/weekly-data'

export default {
    name: 'ExpensesChart',
    // Store the chart data in the data() function
    data() {
        return {
            weeklyExpensesChart: weeklyExpensesChart
        }
    },
    mounted() {
        const ctx = document.getElementById('expenses-chart');
        console.log(ctx)
        new Chart(ctx, this.weeklyExpensesChart);
    }
}
</script>

<style lang="scss" scoped>
#expenses-chart {
    height: 230px;
    padding-top: 30px;

    @include respond (medium) {
        height: 250px;
    }
}
</style>