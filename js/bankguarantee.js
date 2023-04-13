let advantage = document.querySelector(".spanadvantages1");
let benefit = document.querySelector(".spanadvantages2");
let hiddenAdvantageSection = document.querySelector(".hiddenadvantages");
let hiddenBenefitSection = document.querySelector(".hiddenbenefit");
benefit.addEventListener("click", function () {
  advantage.classList.toggle("buttonactive");
  benefit.classList.toggle("buttonactive");
  hiddenAdvantageSection.style.display = "none";
  hiddenBenefitSection.style.display = "block";
});
advantage.addEventListener("click", function () {
  advantage.classList.toggle("buttonactive");
  benefit.classList.toggle("buttonactive");
  hiddenAdvantageSection.style.display = "block";
  hiddenBenefitSection.style.display = "none";
});

// filtre
let allFiltre = document.querySelector(".allfiltre");
let tenderFiltre = document.querySelector(".tenderfiltre");
let expressFiltre = document.querySelector(".expressfiltre");
let guaranteFiltre = document.querySelector(".guaranteefiltre");
let avansFiltre = document.querySelector(".avansfiltre");
let financeFiltre = document.querySelector(".financefiltre");
let paymantFiltre = document.querySelector(".paymentfiltre");
let customsFiltre = document.querySelector(".customsfiltre");
let constFiltre = document.querySelector(".constfiltre");
let allFiltreSection = document.querySelector(".hiddenfiltreitem");
let tenderOfferSection = document.querySelector(".tenderoffer");
let expressSection = document.querySelector(".express-tender");
let performanceSection = document.querySelector(".performanceguarantee");
let advancePaymentSection = document.querySelector(".advancepayment");
let financeSection = document.querySelector(".finance");
let paymentGuaranteeSection = document.querySelector(".paymentguarantee");
let customsSection = document.querySelector(".customs");
let counterGuaranteeSection = document.querySelector(".counterguarantee");
// allFiltre.addEventListener("click", function () {
//   allFiltreSection.style.display = "block";
// });
tenderFiltre.addEventListener("click", function () {
  tenderOfferSection.style.display = "block";
  tenderFiltre.classList.toggle("filtreactive");
  expressSection.style.display = "none";
  paymentGuaranteeSection.style.display = "none";
  advancePaymentSection.style.display = "none";
  financeSection.style.display = "none";
  paymentGuaranteeSection.style.display = "none";
  customsSection.style.display = "none";
  counterGuaranteeSection.style.display = "none";
  performanceSection.style.display = "none";
});
expressFiltre.addEventListener("click", function () {
  tenderOfferSection.style.display = "none";
  expressSection.style.display = "block";
  expressFiltre.classList.toggle("filtreactive");
  paymentGuaranteeSection.style.display = "none";
  advancePaymentSection.style.display = "none";
  financeSection.style.display = "none";
  paymentGuaranteeSection.style.display = "none";
  customsSection.style.display = "none";
  counterGuaranteeSection.style.display = "none";
  performanceSection.style.display = "none ";
});
guaranteFiltre.addEventListener("click", function () {
  tenderOfferSection.style.display = "none";
  expressSection.style.display = "none";
  paymentGuaranteeSection.style.display = "block";
  guaranteFiltre.classList.toggle("filtreactive");
  advancePaymentSection.style.display = "none";
  financeSection.style.display = "none";
  paymentGuaranteeSection.style.display = "none";
  customsSection.style.display = "none";
  counterGuaranteeSection.style.display = "none ";
  performanceSection.style.display = "none";
});
avansFiltre.addEventListener("click", function () {
  tenderOfferSection.style.display = "none";
  expressSection.style.display = "none";
  paymentGuaranteeSection.style.display = "none";
  advancePaymentSection.style.display = "block";
  avansFiltre.classList.toggle("filtreactive");
  financeSection.style.display = "none";
  paymentGuaranteeSection.style.display = "none";
  customsSection.style.display = "none ";
  counterGuaranteeSection.style.display = "none";
  performanceSection.style.display = "none";
});
financeFiltre.addEventListener("click", function () {
  tenderOfferSection.style.display = "none";
  expressSection.style.display = "none";
  paymentGuaranteeSection.style.display = "none";
  advancePaymentSection.style.display = "none";
  financeSection.style.display = "block";
  financeFiltre.classList.toggle("filtreactive");
  paymentGuaranteeSection.style.display = "none ";
  customsSection.style.display = "none";
  counterGuaranteeSection.style.display = "none";
  performanceSection.style.display = "none";
});
paymantFiltre.addEventListener("click", function () {
  tenderOfferSection.style.display = "none";
  expressSection.style.display = "none";
  paymentGuaranteeSection.style.display = "none";
  advancePaymentSection.style.display = "none";
  financeSection.style.display = "none ";
  paymentGuaranteeSection.style.display = "block";
  customsSection.style.display = "none";
  counterGuaranteeSection.style.display = "none";
  performanceSection.style.display = "none";
});
customsFiltre.addEventListener("click", function () {
  tenderOfferSection.style.display = "none";
  expressSection.style.display = "none";
  paymentGuaranteeSection.style.display = "none";
  advancePaymentSection.style.display = "none ";
  financeSection.style.display = "none";
  paymentGuaranteeSection.style.display = "none";
  customsSection.style.display = "block";
  counterGuaranteeSection.style.display = "none";
  performanceSection.style.display = "none";
});
constFiltre.addEventListener("click", function () {
  tenderOfferSection.style.display = "none";
  expressSection.style.display = "none";
  paymentGuaranteeSection.style.display = "none ";
  advancePaymentSection.style.display = "none";
  financeSection.style.display = "none";
  paymentGuaranteeSection.style.display = "none";
  customsSection.style.display = "none";
  counterGuaranteeSection.style.display = "block";
  performanceSection.style.display = "none";
});
