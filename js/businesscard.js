let firstInformationButton = document.querySelector(".information1button");
let secondInformationButton = document.querySelector(".information2button");
let thirdInformationButton = document.querySelector(".information3button");
let firstInformation = document.querySelector(".information1");
let secondInformation = document.querySelector(".information2");
let thirdInformation = document.querySelector(".information3");
let closeInformationOne = document.querySelector(".closeinformation1");
let closeInformationTwo = document.querySelector(".closeinformation2");
let closeInformationThree = document.querySelector(".closeinformation3");
firstInformationButton.addEventListener("click", function () {
  firstInformation.style.display = "block";
});
secondInformationButton.addEventListener("click", function () {
  secondInformation.style.display = "block";
});
thirdInformationButton.addEventListener("click", function () {
  thirdInformation.style.display = "block";
});
closeInformationOne.addEventListener("click", function () {
  firstInformation.style.display = "none";
});
closeInformationTwo.addEventListener("click", function () {
  secondInformation.style.display = "none";
});
closeInformationThree.addEventListener("click", function () {
  thirdInformation.style.display = "none";
});

// mostgivenquestion
let oneButtonAccordion = document.querySelector(".accordion1");
let twoButtonAccordion = document.querySelector(".accordion2");
let threeButtonAccordion = document.querySelector(".accordion3");
let oneAccordionText = document.querySelector(".accordion1text");
let twoAccordionText = document.querySelector(".accordion2text");
let threeAccordionText = document.querySelector(".accordion3text");
let showOneAccordionPlus = document.querySelector(".showbuttonaccordion1");
let showTwoAccordionPlus = document.querySelector(".showbuttonaccordion2");
let showThreeAccordionPlus = document.querySelector(".showbuttonaccordion3");
oneButtonAccordion.addEventListener("click", function () {
  if ((oneAccordionText.style.display = "none")) {
    oneAccordionText.style.display = "block";
  } else {
    oneAccordionText.style.display = "none";
  }
});
twoButtonAccordion.addEventListener("click", function () {
  twoAccordionText.style.display = "block";
  showTwoAccordionPlus.textContent = "-";
});
threeButtonAccordion.addEventListener("click", function () {
  threeAccordionText.style.display = "block";
  showThreeAccordionPlus.textContent = "-";
});
