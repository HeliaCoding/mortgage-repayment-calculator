const myForm = document.getElementById("my-form");

myForm.addEventListener('submit', function calculator(e) {
    e.preventDefault();
const amount = parseFloat(document.getElementById("amount").value);
const term = parseFloat(document.getElementById("term").value) * 2;
const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100 / 12;
const isRepayment = document.getElementById("type-1").checked;
const monthlyRepay = document.getElementById("monthly-repay"); 
const totalRepay = document.getElementById("total-repay");
let monthlyPayment;

    if (isRepayment) {
      monthlyPayment = (amount * interestRate) / (1 - Math.pow(1 + interestRate, -term));
       console.log(monthlyPayment);
       console.log(amount);
       console.log(term); 
    }else {
        monthlyPayment = amount * interestRate;
    }
    const totalPayment = monthlyPayment * term;
    monthlyRepay.textContent = ` £${monthlyPayment.toFixed(2)}`;
    totalRepay.textContent = ` £${totalPayment.toFixed(2)}`;
})



