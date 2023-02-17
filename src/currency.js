export default class Currency {
  static exchangeRate() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response]);
        } else {
          reject([this,response]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}

// export default class Currency {
//   static exchangeRate() {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `https://v6.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`;
//       request.addEventListener("loadend", function() {
//         const response = JSON.parse(this.responseText);
//         if (this.status === 200) {
//           console.log("API call succeeded:", response);
//           resolve(response);
//         } else {
//           console.error("API call failed with status code:", this.status);
//           reject(new Error("API call failed"));
//         }
//       });
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }






// export default class Currency {
//   static exchangeRate() {
//     return new Promise(function(printElements, printError) {
//       let request = new XMLHttpRequest();
//       const url = `https://v6.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`;
//       request.addEventListener("loadend", function() {
//         const response = JSON.parse(this.responseText);
//         if (this.status === 200) {
//           printElements([response]);
//         } else {
//           printError([this,response]);
//         }
//       });
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }
  



// export default class Currency {
//   static async exchangeRate(generate, newCode, error) {
//     try {
//       const response = await fetch(
//         `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD/${generate}/${newCode}/${error}`
//       );
//       const jsonifiedResponse = await response.json();
//       if (!response.ok) {
//         const errorMessage = `${response.status} ${jsonifiedResponse.statusText}
//         ${jsonifiedResponse.message}`;
//         throw new Error(errorMessage);
//       }
//       return jsonifiedResponse;
//     } catch (error) {
//       return error;
//     }
//   }
// }


//export default class Currency {
//   static exchangeRate(generate) {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD/${generate}`;
//       request.addEventListener("loadend", function() {
//         const response = JSON.parse(this.responseText);
//         console.log(response);
//         if(response.error === false) {
//           resolve(response);
//         } else {
//           reject([this, response]);
//         }
//       });
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }