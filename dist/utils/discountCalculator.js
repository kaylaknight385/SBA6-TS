"use strict";
//okey we are in this file to calculate the discount amount dollas
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(price, discountPercent) {
    return price * (discountPercent / 100);
    //exports this function to make it avail to other files. Price/discountPercentage are the first 2 parameters. The function then returns a number.
}
