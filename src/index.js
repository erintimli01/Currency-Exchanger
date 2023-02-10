import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js';


function exchangeRate(rate) {
  let promise = Currency.exchangeRate(rate);
  promise.then(function(response) {
    printElements(response, rate);
  }, function(errorMessage){
    printError(errorMessage);
  });
}



// UI Logic



function printElements(response, usDollars) {
  document.querySelector('#showResponse').innerHTML = `$${usDollars}</b> in <b>${response.target_code} is <b>${response.conversion_result}</b>`;
}


function printError(error) {
  const response = JSON.parse(error.response);
  if (response.result === "error") {
    document.querySelector('#showResponse').innerText = `There was an error in accessing data: ${response['error-type']}`;
  }
}



function handleFormSubmission(event) {
  event.preventDefault();
//   const generate = document.getElementById('generate-input').value;
//   generateJoke(generate);
}

  window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click", handleFormSubmission);
  });
