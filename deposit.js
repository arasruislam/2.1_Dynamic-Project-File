// step 1: add event listener into deposit button.
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2: get the deposit amount from the deposit input field. for input field use .value to get the input field value.
    const depositField = document.getElementById('deposit-amount');
    const newDepositTotalString = depositField.value;
    const newDepositTotal = parseFloat(newDepositTotalString);

    // step 3: get the current deposit amount. For non-input tag use innerText to get the value.
    const depositTotalAmount = document.getElementById('total-deposit');
    const previousDepositAmountString = depositTotalAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    // depositTotalAmount.innerText = depositAmount;

    // step 4: add numbers to set the total value
    const totalDepositAmount = previousDepositAmount + newDepositTotal;
    // set the deposit amount
    depositTotalAmount.innerText = totalDepositAmount;

    // step 5: set balance total current amount
    const totalBalanceAmount = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceAmount.innerText;
    const previousBalanceTotal = parseFloat(previousTotalBalanceString);

    //step 6: Calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositTotal;

    // set total current balance
    totalBalanceAmount.innerText = currentBalanceTotal;




    // Clear the input field after deposit and withdraw money
    depositField.value = '';
})