import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js';


function exchangeRate() {
  let promise = Currency.exchangeRate();
  promise.then(function(response) {
    printElements(response);
  }, function(errorMessage){
    printError(errorMessage);
  });
}



// UI Logic



function printElements(response, usd) {
  document.querySelector('#showResponse').innerHTML = `$${usd}</b> in <b>${response.target_code} is <b>${response.conversion_result}</b>`;
}


function printError(error) {
  const response = JSON.parse(error, response);
  if (response.result === "error") {
    document.querySelector('#showResponse').innerText = `There was an error in accessing data: ${response['error-type']}`;
  }
}



function handleFormSubmission(event) {
  event.preventDefault();
  const usd = document.querySelector('#usd');
  const code = document.querySelector('code');
  document.querySelector('#usd').value = null;
  Currency.exchangeRate(exchangeRate, usd, code);
}
window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});

