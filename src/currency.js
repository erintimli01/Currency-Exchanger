export default class Currency {
  static exchangeRate(rate) {
    return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/d01a325dff7c2eaf0535f8a5/latest/USD`;
    request.addEventListener("loadend", function () {
      const response = JSON.parse(this.responseText);
      if (this.status === 200) {
        resolve(response);
      } else {
        reject([this, response]);
      } 
    });

    request.open("GET", url, true);
    request.send();
    });
  }
}
