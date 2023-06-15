"use strict"
function solveEquation(a, b, c) {
  let d = (b ** 2 -(4 * a * c));
  let arr = [];

  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let s = amount - contribution;
  let payPerMonth = s * (p + (p / (((1 + p) ** countMonths) - 1)))

  return +((payPerMonth * countMonths).toFixed(2));
}