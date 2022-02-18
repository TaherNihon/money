// Input Income amount function 
function getIncomeInput(inputId) {
  const incomeInput = document.getElementById(inputId);
  const incomeAmountText = incomeInput.value;
  const incomeAmount = parseFloat(incomeAmountText);
   if(incomeAmount == "") {
    alert("Income field cannot be empty please provide a number to get result");
    document.getElementById("total-expenses").value = 0;
  } else if (incomeAmount < 0) {
    alert("please provide a positive number");
    document.getElementById("total-expenses").innerText = 0;
    document.getElementById("balance").innerText = 0;
    return 0 ;
  } else {
    return incomeAmount;
  }
}
// expenses section 
function getExpensesInput(itemId) {
  const expensesInput = document.getElementById(itemId);
  const expensesAmountText = expensesInput.value;
  const expensesAmount = parseFloat(expensesAmountText);
  if (expensesAmount < 0) {
    alert("Please provide a positive number");
    document.getElementById(itemId).value = 0;
  } else if (expensesInput.value == "") {
    alert("input field cannot be empty");
    document.getElementById(itemId).value = 0;
  } else {
    expensesInput.value = "";
    return expensesAmount;
  }
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  // Income amount
  const newIncomeAmount = getIncomeInput("deposit-amount");
  

  // food amount
  const foodAmount = getExpensesInput("food-amount");


  // Rent amount
  const rentAmount = getExpensesInput("rent-amount");

  // clothes amount
  const clothesAmount = getExpensesInput("clothes-amount");

  // total  expenses
  const totalExpense = document.getElementById("total-expenses");
  const previousTotalText = totalExpense.innerText;
  const previousAmount = parseFloat(previousTotalText);

  const totalCost = clothesAmount + rentAmount + foodAmount;
  const newTotalAmount = totalCost + previousAmount;
  totalExpense.innerText = totalCost;

// error handing 
const incomeText = getIncomeInput("deposit-amount");
let expensesText = newTotalAmount;
if(incomeText < expensesText){
    alert("you cannot expenses greater than income amount");
    document.getElementById('total-expenses').innerText = 0;
    document.getElementById('balance').innerText = 0;
}



  // after shopping amount
  const afterShopping = document.getElementById("balance");
  const afterShoppingText = afterShopping.innerText;
  // const newIncomeAmount2 = getInputValue('deposit-amount');
  const totalShopping = newIncomeAmount - newTotalAmount;
  if(totalShopping < 0){
      afterShopping.innerText = 0;
  }
  else{
    afterShopping.innerText = totalShopping;
  }
  
});

// saving part
document.getElementById("save-btn").addEventListener("click", function() {
  const incomeInput2 = document.getElementById("deposit-amount");
  const incomeAmountText2 = incomeInput2.value;
  const incomeAmount2 = parseFloat(incomeAmountText2);
  console.log(typeof incomeAmount2);
  console.log(incomeAmount2);
  // const newIncomeAmount2 = getInputValue('deposit-amount');
  // saving percent
  const savingInfo = document.getElementById("saving-percent");
  const savingPercentText = savingInfo.value;
  const savingPercent = parseFloat(savingPercentText);
  const savingAmount = (incomeAmountText2 * savingPercent) / 100;
  
  // saving amount
  document.getElementById("saving-amount").innerText = savingAmount;
  // document.getElementById('remaining-amount').innerText = remainingAmount;

  // balance 
    const balanceInput = document.getElementById('balance');
    const balanceAmount = parseFloat(balanceInput.innerText);
    
    // remaining balance 
    const remainingInput = document.getElementById('remaining-amount');
    const remainingAmountText = parseFloat(remainingInput.innerText);

    // total remaining balance 
    const totalRemainingAmount = balanceAmount - savingAmount;
    remainingInput.innerText = totalRemainingAmount;

    
});
