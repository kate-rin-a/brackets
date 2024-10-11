module.exports = function check(str, bracketsConfig) {
  const ONLY_CLOSED_BRACKETS = [')', '}',']'];
  const ONLY_OPEN_BRACKETS = ['(', '{','['];
  let OPEN_BRACKETS = bracketsConfig.map((item) => item[0]);
  let CLOSED_BRACKETS = bracketsConfig.map((item) => item[1]);
  let BRACKETS_PAIR =  Object.fromEntries(CLOSED_BRACKETS.map((key, index) => [key, OPEN_BRACKETS[index]]));

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let lastStackSymbol = stack[stack.length-1]
    let currentSymbol = str[i];

      if (ONLY_OPEN_BRACKETS.includes(currentSymbol)) {  
        stack.push(currentSymbol);
      } else {
        if (OPEN_BRACKETS.includes(currentSymbol) && CLOSED_BRACKETS.includes(currentSymbol)) {
         if (!stack.includes(currentSymbol)){
           stack.push(currentSymbol);
         } else {
          stack.pop()
        } 
        } else {
          if (BRACKETS_PAIR[currentSymbol] === stack[stack.length-1]) {
            stack.pop();
          } else {
            return false;
          }
      }
        //} else {
        //if (currentSymbol !== lastStackSymbol){
        //stack.push(currentSymbol);
        //} else {
        //stack.pop();
        //}
      //}
    }
  }     
  console.log(stack);
 return stack.length === 0;
}
