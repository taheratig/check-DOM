// adding attribute for default value
let tabOb = document.querySelectorAll(".price");
for (let i = 0; i < tabOb.length; i++) {
  tabOb[i].setAttribute("value", tabOb[i].innerText);
}

// button plus

let btnplus = document.getElementsByClassName("plus-btn");

for (let i = 0; i < btnplus.length; i++) {
  let shopplus = btnplus[i];
  shopplus.addEventListener("click", function () {
    shopplus.previousElementSibling.value++;
    let quantProduct = shopplus.previousElementSibling.value;
    let priceProduct = btnplus[i].parentNode.nextElementSibling;
    priceProduct.innerText = +priceProduct.getAttribute("value") * quantProduct;
    finalPrice.value = +finalPrice.value + +priceProduct.getAttribute("value");
  });
}

// button minus

let btnMinus = document.getElementsByClassName("minus-btn");

for (let i = 0; i < btnMinus.length; i++) {
  let shopminus = btnMinus[i];
  shopminus.addEventListener("click", function () {
    if (shopminus.nextElementSibling.value > 1) {
      shopminus.nextElementSibling.value--;
      let quantProduct = shopminus.nextElementSibling.value;
      let priceProduct = btnMinus[i].parentNode.nextElementSibling;
      priceProduct.innerText =
        +priceProduct.getAttribute("value") * quantProduct;
      finalPrice.value =
        +finalPrice.value - +priceProduct.getAttribute("value");
    }
  });
}

// button delete

let deletbtn = document.getElementsByClassName("delete");
for (let i = 0; i < deletbtn.length; i++) {
  let btn = deletbtn[i];
  btn.addEventListener("click", function () {
    btn.parentElement.remove();
    let quantProduct = document.querySelector(".Quant").value;
    let priceProduct = btn.previousElementSibling;
    priceProduct.innerText = +priceProduct.getAttribute("value") * quantProduct;
    finalPrice.value = +finalPrice.value - +priceProduct.innerText;
  });
}

// like
let likeH = document.getElementsByClassName("like");

for (let i = 0; i < likeH.length; i++) {
  let onelike = likeH[i];
  onelike.addEventListener("click", function () {
    if (onelike.firstElementChild.style.color == "black") {
      onelike.firstElementChild.style.color = "red";
    } else {
      onelike.firstElementChild.style.color = "black";
    }
  });
}
// finalPrice

let finalPrice = document.getElementById("finalPrice");
finalPrice.value = 2055;
