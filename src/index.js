import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js';

// Business Logic
function exchangeRate() {
  let promise = Currency.exchangeRate();
  promise.then(function(newCode) {
    printElements(newCode);
  }, function(error){
    printError(error);
  });
}

// UI Logic

function printError(error) {
  const err = Object.values(error[1]);
  document.querySelector("#showResponse").innerText = `There was an error in accessing data: ${err[3]}`;
}

function printElements(currencyConversion) {
  //try consts in handleForm
  const currencyCode = document.querySelector("#currencyCode").value;
  const usDollars = document.querySelector("#usDollars").value;
  const newCode = currencyConversion[0]["conversion_rates"][currencyCode];
  //try if in printerror 
  if(currencyConversion[0]["conversion_rates"][currencyCode] === "undefined") {
    document.querySelector("#showResponse").innerText = `There was an error accessing data!`;
  } else {
    document.querySelector("#showResponse").innerText = `$${usDollars} USD = ${
      newCode * usDollars} ${currencyCode}`;
  }
}

function handleFormSubmission(event) {
  event.preventDefault();
  exchangeRate();
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
});

