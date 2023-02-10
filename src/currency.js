export default class Currency {
  static exchangeRate(exchangeRate, usd, code) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6${process.env.API_KEY}/latest/USD${code}/${usd}`;
      request.addEventListener("loadend", function () {
        const response = JSON.parse(this.responseText);
        if(response.error === false) {
          resolve(response);
        } else {
          reject([this, response]);
        }
      // if (this.status === 200) {
      //   resolve(response);
      // } else {
      //   reject([this, response]);
      // } 
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}
