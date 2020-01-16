// console.log(true&&true);
// console.log(false&&true);

let highIncome=false;
let goodCreditScore=false;

// let eligibleForLoan=highIncome&&goodCreditScore;
let eligibleForLoan=highIncome||goodCreditScore;
let applicationRefused=!eligibleForLoan;
console.log('Application Refused',applicationRefused);