let linkOneCard = document.querySelector(".link1");
let linkTwoCard = document.querySelector(".link2");
let deliveryCard = document.querySelector(".advantagescardone");
let discountCard = document.querySelector(".advantagescardtwo");
linkOneCard.addEventListener("click", function () {
  deliveryCard.style.display = "block";
  discountCard.style.display = "none";
});
linkTwoCard.addEventListener("click", function () {
  deliveryCard.style.display = "none";
  discountCard.style.display = "block";
});
