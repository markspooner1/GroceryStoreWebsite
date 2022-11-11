"use strict";
const cart = document.querySelector(".cart_container");
var totals = 0;
for (let [key, value] of Object.entries(localStorage)) {
  console.log(key,value)
    const item = document.createElement("div");
    const name = document.createElement("p");
    const total = document.createElement("p");
    const image = document.createElement("img");
    image.setAttribute("src", `assets/${key}.jpeg`);
    item.append(image);
    item.append(name)
    item.append(total)
    name.textContent = key;
    total.textContent = `(${value}) x $0.30`;
    item.classList.add("checkout")
    cart.append(item);
    totals += (0.3 * value);
  }
  var subtotal = document.createElement("div");
  subtotal.textContent = `Subtotal: $${totals.toFixed(2)}`;
  subtotal.classList.add("sub_total");
  document.querySelector(".topnav").append(subtotal);
