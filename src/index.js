import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js';


function exchangeRate() {
  let promise = Currency.exchangeRate();
  promise.then(function(newCode) {
    printElements(newCode);
  }).catch(function(error){
    printError(error);
  });
}

function printError(error) {
  if (error[0].status === 404) {
    document.querySelector("#showResponse").innerText = `Error: API endpoint not found!`;
  } else if (error[0].status === 403) {
    document.querySelector("#showResponse").innerText = `Error: API key is invalid or has exceeded its usage limits!`;
  } else {
    const err = Object.values(error[1]);
    const errorMessage = `There was an error in accessing data: ${err[3]}`;
    document.querySelector("#showResponse").innerText = errorMessage;
  }
  document.querySelector("#showResponse").classList.add("error");
}

function printElements(currencyConversion) {
  const currencyCode = document.querySelector("#currencyCode").value;
  const usDollars = document.querySelector("#usDollars").value;
  const newCode = currencyConversion[0]["conversion_rates"][currencyCode];
  if(currencyConversion[0]["conversion_rates"][currencyCode] === undefined) {
    document.querySelector("#showResponse").innerText = `There was an error accessing data!`;
    document.querySelector("#showResponse").classList.add("error");
  } else {
    document.querySelector("#showResponse").innerText = `$${usDollars} USD = ${
      newCode * usDollars} ${currencyCode}`;
    document.querySelector("#showResponse").classList.remove("error");
  }
}

function handleFormSubmission(event) {
  event.preventDefault();
  exchangeRate();
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
});

