//**Challeng: CHEKOUT ORDER DETAILS**//
const commodity1 = 100;
const commodity2 = 250;
const commodity3 = 150;

const firstTotalPrice = ((commodity1*1) + (commodity2*1) + (commodity3*2));
console.log("firstTotalPrice:", firstTotalPrice);

const off = 0.05;
const finalPrice = (((1-off)*firstTotalPrice));
console.log("finalPrice",finalPrice);

const credit = 660;

const canBuy = credit >= finalPrice;
console.log("canBuy: ", canBuy);

const message = canBuy ? "You can buy!" : "Sorry!"
console.log(message)