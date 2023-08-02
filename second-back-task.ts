class SecondBackTask {
  static getResult(a: number, b: number): number {
    let result: number = Math.pow(a, b);
    let lastDigit: number = result % 10;
    return lastDigit;
  }
}
  

let result = SecondBackTask.getResult(2, 3);
console.log(result);
