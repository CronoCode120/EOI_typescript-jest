function sum(a: number, b: number): number {
    if (isNaN(a) || isNaN(b)) {
      throw new Error('A parameter is not a number (NaN)');
    }
    return a + b;
}

function sub(a: number, b: number): number {
    if (isNaN(a) || isNaN(b)) {
      throw new Error('A parameter is not a number (NaN)');
    }
    return a - b;
}

function multiply(a: number, b: number): number {
    if (isNaN(a) || isNaN(b)) {
      throw new Error('A parameter is not a number (NaN)');
    }
    return a * b;
}

function div(a: number, b: number): number {
    if (isNaN(a) || isNaN(b)) {
      throw new Error('A parameter is not a number (NaN)');
    }
    return a / b;
}

// To Implement: sumAll, subAll, multiplyAll, divAll

export { sum, sub, multiply, div };
