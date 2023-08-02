class FirstBackTask {
  static getResult(actions: string | any[]): number {
    let sessionCount = 0;
    let messageCount = 0;
      
    for (let i = 0; i < actions.length; i++) {
      if (actions[i] === "start") {
        sessionCount++;
      } else if (actions[i] === "end") {
        sessionCount--;
      } else if (actions[i] === "message" && sessionCount > 0) {
        messageCount++;
      }
    }
      
    return messageCount;
  }
}
  
// Test
const actions1 = ["start", "message", "end"]; 
console.log(FirstBackTask.getResult(actions1)); // Output: 1
  
const actions2 = ["start", "message", "end", "message", "start", "message", "end"]; 
console.log(FirstBackTask.getResult(actions2)); // Output: 2
  
const actions3 = ["start", "message", "end", "message", "message", "end"]; 
console.log(FirstBackTask.getResult(actions3)); // Output: 2
