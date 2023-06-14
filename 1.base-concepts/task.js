"use strict"
function solveEquation(a, b, c) {
  let d = (b ** 2 -(4 * a * c));
  let arr = [];

  // if (d === 0) {
  //   arr.push(-b / (2 * a));
  // } else if (d > 0) {
  //   arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
  // }

  switch (true) {
    case (d === 0) :
      arr.push(-b / (2 * a));
      break;
    case (d > 0) :
      arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
      break;
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  debugger;
  if (typeof percent === 'string' || typeof percent === 'number') {
    percent === +percent;
  } else {
    percent === false;
  }

  if (typeof contribution === 'string' || typeof contribution === 'number') {
    contribution === +contribution;
  } else {
    contribution === false;
  }

  if (typeof amount === 'string' || typeof amount === 'number') {
    amount === +amount;
  } else {
    amount === false;
  }

  if (typeof countMonths === 'string' || typeof countMonths === 'number') {
    countMonths === +countMonths;
  } else {
    countMonths === false;
  }

  let p = percent / 100;
  let s = amount - contribution;
  let payPerMonth = s * (p + (p / (((1 + p) ** countMonths) - 1)))

  return +((payPerMonth * countMonths).toFixed(2));
}