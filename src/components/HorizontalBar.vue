<template>
  <div id="horizontal">
    <canvas id="barChart" height="125"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js'
import { mapGetters } from 'vuex'
export default {
  name: 'horizontal',
  data () {
    return {
      barChart: null
    }
  },
  computed: {
    ...mapGetters([
      'categories',
      'expenses'
    ]),
    amount: function () {
      const amount = []
      this.categories.map(category => {
        let sum = 0
        this.expenses.map((expense, index) => {
          if (expense.category === category) {
            sum += expense.amount
          } else if (index === this.expenses.length - 1 && sum === 0) {
            sum = 0
          }
        })
        amount.push(sum)
        // category scope
      })
      return amount
    }
  },
  mounted: function () {
    var ctx = document.getElementById('barChart').getContext('2d')
    // eslint-disable-next-line no-unused-vars
    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [...this.categories],
        datasets: [{
          label: '# of Money Spent',
          data: [...this.amount],
          barPercentage: 1,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
          ],
          hoverBackgroundColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 206, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(255, 159, 64, 0.9)',
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 206, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(153, 102, 255, 0.9)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 206, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(255, 159, 64, 0.9)',
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 206, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(153, 102, 255, 0.9)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          position: 'top',
          text: 'Amount of Expenses Spent This Month ($)'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  },
  watch: {
    expenses: {
      immediate: false,
      handler () {
        this.barChart.config.data.datasets[0].data = this.amount
        this.barChart.update()
      }
    }
  }
}
</script>
