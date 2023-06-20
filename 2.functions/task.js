function getArrayParams(...arr) {
  let result = {};


  result.min = Math.min( ...arr);
  result.max = Math.max(...arr);
  result.avg = +((arr.reduce((acc, curr) => acc + curr)) / arr.length).toFixed(2);
  return result;
}

function summElementsWorker(...arr) {
  if (arr.length > 1) {
    return arr.reduce((acc, curr) => acc + curr);
  } else {
    return 0;
  }  
}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 1) {
    return Math.max(...arr) - Math.min(...arr);
  } else {
    return 0;
  } 
}

function differenceEvenOddWorker(...arr) {
  let sumEven = 0;
  let sumOdd = 0;

  for(let i = 0; i < arr.length; i++) {
    if((arr[i] % 2) === 0) {
      sumEven += arr[i];
    }
  }

  for(let i = 0; i < arr.length; i++) {
    if((arr[i] % 2) !== 0) {
      sumOdd += arr[i];
    }
  }

  return sumEven - sumOdd
}

function averageEvenElementsWorker(...arr) {
  let arrEven = [];
  let evenCounter = 0;

  for (let i of arr) {
    if ((i % 2) === 0) {
      arrEven.push(i);
      evenCounter++;
    }
  }

  if (arr.length > 0) {
    return (arrEven.reduce((acc, curr) => acc + curr)) / evenCounter
  } else {
    return 0
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i of arrOfArr) {
    const result = func(...i);
    if(result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult
}
