function sum(a: number, b: number): number {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('A parameter is not a number (NaN)');
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    let decimals = 0
    if (!Number.isInteger(a)) decimals = a.toString().split('.')[1].length;
    if (!Number.isInteger(b)) decimals = b.toString().split('.')[1].length > decimals ? b.toString().split('.')[1].length : decimals;

    return parseFloat((a + b).toFixed(decimals));
  }
  return a + b;
}

function sub(a: number, b: number): number {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('A parameter is not a number (NaN)');
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    let decimals = 0
    if (!Number.isInteger(a)) decimals = a.toString().split('.')[1].length;
    if (!Number.isInteger(b)) decimals = b.toString().split('.')[1].length > decimals ? b.toString().split('.')[1].length : decimals;

    return parseFloat((a - b).toFixed(decimals));
  }
  return a - b;
}

function multiply(a: number, b: number): number {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('A parameter is not a number (NaN)');
  }
  let result = parseFloat((a * b).toFixed(10));
  if (result <= 0.0000000001) result = 0;
  return result;
}

function div(a: number, b: number): number {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('A parameter is not a number (NaN)');
  }
  let result = parseFloat((a / b).toFixed(10));
  if (result <= 0.0000000001) result = 0;
  return result;
}

// To Implement: sumAll, subAll, multiplyAll, divAll

export { sum, sub, multiply, div };
