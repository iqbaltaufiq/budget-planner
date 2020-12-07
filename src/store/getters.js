export default {
  income: (state) => {
    return state.income
  },
  expenses: (state) => {
    return state.expenses
  },
  categories: (state) => {
    return state.categories
  },
  totalIncome: (state) => {
    let total = 0
    state.income.map(e => {
      total += e.amount
    })
    return total
  },
  totalExpenses: (state) => {
    let expense = 0
    state.expenses.map(e => {
      expense += e.amount
    })
    return expense
  },
  balance: (state, getters) => {
    return getters.totalIncome - getters.totalExpenses
  },
  incomeToExpenseRatio: (state, getters) => {
    return Math.round(getters.totalExpenses / getters.totalIncome * 100)
  }
}
