let popupButton1 = document.querySelector(".popup1");
let popupButton2 = document.querySelector(".popup2");
let popupButton3 = document.querySelector(".popup3");
let popup1 = document.querySelector(".supportpopup1");
let popup2 = document.querySelector(".supportpopup2");
let popup3 = document.querySelector(".supportpopup3");
let closepopup = document.querySelector(".closepopup");
let closepopup2 = document.querySelector(".closepopup2");
let closepopup3 = document.querySelector(".closepopup3");
popupButton1.addEventListener("click", function () {
  popup1.style.display = "block";
});
closepopup.addEventListener("click", function () {
  popup1.style.display = "none";
});
closepopup2.addEventListener("click", function () {
  popup2.style.display = "none";
});
popupButton2.addEventListener("click", function () {
  popup2.style.display = "block";
});
closepopup3.addEventListener("click", function () {
  popup3.style.display = "none";
});
popupButton3.addEventListener("click", function () {
  popup3.style.display = "block";
});
