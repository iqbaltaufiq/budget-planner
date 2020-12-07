<template>
  <div id="pie">
    <canvas id="pieChart" height="250"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js'
import { mapGetters } from 'vuex'
export default {
  name: 'Pie',
  data () {
    return {
      pieChart: null
    }
  },
  computed: {
    ...mapGetters([
      'categories',
      'balance',
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
  mounted () {
    var ctx = document.getElementById('pieChart').getContext('2d')
    var config = {
      type: 'doughnut',
      data: {
        labels: ['Aftercut', ...this.categories],
        datasets: [{
          data: [this.balance, ...this.amount],
          backgroundColor: [
            'rgba(175, 175, 175, 0.7)',
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
          borderColor: [
            'rgba(175, 175, 175, 0.7)',
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
          borderWidth: 1,
          weight: 1
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          position: 'top',
          text: 'Ratio between Expenses and Income (%)'
        }
      }
    }

    this.pieChart = new Chart(ctx, config)
  },
  watch: {
    balance: {
      immediate: false,
      handler () {
        this.pieChart.config.data.datasets[0].data[0] = this.balance
        this.pieChart.update()
      }
    },
    expenses: {
      immediate: false,
      handler () {
        this.pieChart.config.data.datasets[0].data = [this.balance, ...this.amount]
        this.pieChart.update()
      }
    }
  }
}
</script>

<style scoped>
#pie {
  position: relative;
}
</style>
