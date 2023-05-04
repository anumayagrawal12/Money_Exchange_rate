const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  //   fetch(
  //     `https://v6.exchangerate-api.com/v6/de731cb92c6e3868f6f495d7/latest/${currency_one}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //  console.log(data);
  //       const rate =
  //         conversion_rates[currency_two] / conversion_rates[currency_one];
  //       rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
  //       amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
  //     });
  fetch(
    `https://v6.exchangerate-api.com/v6/de731cb92c6e3868f6f495d7/pair/${currency_one}/${currency_two}`
  )
    .then((res) => res.json())
    .then((data) => {
      //  console.log(data);
      console.log(data);
      const rate = data.conversion_rate;
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
  //   var myHeaders = new Headers();
  //   myHeaders.append("apikey", "PwIUTyaDTCKCmoLzF6nDFYnEzghzkDgb");

  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //     headers: myHeaders,
  //   };

  //   fetch(
  //     `https://api.apilayer.com/exchangerates_data/convert?to=${currencyEl_two.value}&from=${currencyEl_one.value}&amount=${amountEl_one.value}`,
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
}

// Event Listener
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
