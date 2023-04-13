let showMoney = document.querySelector(".inputcalculator");
let showMonth = document.querySelector(".month");
let resultMoneyShow = document.querySelector(".resutlmoneyshow");
function calculate(money) {
  showMoney.textContent = money;
  calculatepercent();
}
function calculatemonth(month) {
  showMonth.textContent = month;
  calculatepercent();
}
function calculatepercent() {
  let resultMoneyAndMonth =
    (Number(showMoney.textContent) +
      (Number(showMoney.textContent) * 12) / 100) /
    Number(showMonth.textContent);
  resultMoneyShow.textContent = resultMoneyAndMonth.toFixed(2);
}

let linkDocument = document.querySelector(".linkdocument");
let linkCredit = document.querySelector(".linkcredit");
let documentCard = document.querySelector(".document");
let creditCard = document.querySelector(".creditcertificates");
linkDocument.addEventListener("click", function () {
  documentCard.style.display = "block";
  creditCard.style.display = "none";
});
linkCredit.addEventListener("click", function () {
  documentCard.style.display = "none";
  creditCard.style.display = "block";
});
