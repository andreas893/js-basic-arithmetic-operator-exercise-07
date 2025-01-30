"use strict";
let subTotal = 50;
subTotal += 20;
let quantity = 3;
let shipping = 10;
const totalExclusivTax = (quantity * subTotal) + shipping;

let totalInclusivTax = totalExclusivTax * 1.25;
let subTotalElement = document.getElementById("subtotal");
let shippingElement = document.getElementById("shipping");
let totalElement = document.getElementById("total");

subTotalElement.textContent = `${subTotal}`;
shippingElement.textContent = `${shipping}`;
totalElement.textContent = `${totalInclusivTax}`;

console.log("subtotal", subTotal);
console.log("shipping", shipping);
console.log("Total incl. tax", totalInclusivTax);