let expenseTotal = 0;
let incomeTotal = 0;

function addExpense() {
  const expenseInput = document.getElementById('expenseInput');
  const expenseAmount = parseFloat(expenseInput.value);
  if (!isNaN(expenseAmount) && expenseAmount > 0) {
    expenseTotal += expenseAmount;
    updateTotals();
    expenseInput.value = '';
  } else {
    alert('Please enter a valid expense amount.');
  }
}

function addIncome() {
  const incomeInput = document.getElementById('incomeInput');
  const incomeAmount = parseFloat(incomeInput.value);
  if (!isNaN(incomeAmount) && incomeAmount > 0) {
    incomeTotal += incomeAmount;
    updateTotals();
    incomeInput.value = '';
  } else {
    alert('Please enter a valid income amount.');
  }
}

function updateTotals() {
  const savingsTotal = incomeTotal - expenseTotal;
  document.getElementById('expenseTotal').textContent = `$${expenseTotal.toFixed(2)}`;
  document.getElementById('incomeTotal').textContent = `$${incomeTotal.toFixed(2)}`;
  document.getElementById('savingsTotal').textContent = `$${savingsTotal.toFixed(2)}`;
}
