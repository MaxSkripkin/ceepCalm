class ThirdBackTask {
  static getResult(s: string): string {
    let result = "";
    let repeatCount = 1;
  
    for (let i = 0; i < s.length; i++) {
    const char = s[i];
  
      if (char === "{") {
        repeatCount = parseInt(s[i - 1]);
      } else if (char === "}") {
        repeatCount = 1;
      } else {
        for (let j = 0; j < repeatCount; j++) {
          result += char;
        }
      }
    }
  
    return result;
  }
}

const runTest = () => {
  const input = "a{3}bc{2}ef";
  const expectedOutput = "aaabcbcef";
  
  const result = ThirdBackTask.getResult(input);
  
  if (result === expectedOutput) {
    console.log("Test passed");
  } else {
    console.error("Test failed. Expected", expectedOutput, "but got", result);
  }
};
  
runTest();
