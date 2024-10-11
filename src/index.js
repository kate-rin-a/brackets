/* const OPEN_BRACKETS = ['(', '{', '[', '1', '3','5'];
const CLOSED_BRACKETS = [')', '}',']'];
const BRACKETS_PAIR = {
  [')']: '(',
  ['}']: '{',
  [']']: '[',
  ['1']: '2',
  ['3']: '4',
  ['5']: '6',
} */

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


/*
module.exports = function check(str, bracketsConfig) {

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let lastStackSymbol = stack[stack.length-1]
    let currentSymbol = str[i];

      if (OPEN_BRACKETS.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (CLOSED_BRACKETS.includes(currentSymbol)) {
          if (BRACKETS_PAIR[currentSymbol] === stack[stack.length-1]) {
            stack.pop();
          } else {
            return false;
          }
        } else {
       if (currentSymbol !== lastStackSymbol){
        stack.push(currentSymbol);
      } else {
        stack.pop();
      }
    }
     }     
    }
  console.log(stack);
 return stack.length === 0;
}

*/


/*
  let stack = [];
 
  for (let i = 0; i < str.length; i++) {
    let lastStackSymbol = stack[stack.length-1]
    let currentSymbol = str[i];

    if (!CLOSED_BRACKETS.includes(currentSymbol)) {
      if (currentSymbol !== lastStackSymbol) {
        stack.push(currentSymbol);
      } else {
        stack.pop();
      }
    } else {
     //console.log(currentSymbol);
     if (BRACKETS_PAIR[currentSymbol] === lastStackSymbol ) {
       stack.pop()
     } else {
       return false;
     }
    }
  }
 return stack.length === 0;
*/



/*
const test = '({|{|';
//console.log(!test.includes('!'))
;
   const OPEN_BRACKETS = ['(', '{', '['];
   const BRACKETS_PAIR = {
     [')']: ')',
     ['}']: '}',
     [']']: ']'
   }
   console.log(BRACKETS_PAIR['}']);

   const isPair = (str) => {
     let stack = [];
 
     for (let i = 0; i < str.length; i++) {
       //помещаем currentSymbol
       let currentSymbol = str[i];
 
       //если currentSymbol - это открывающая скобка, то она помещается в стек
       if (!stack.includes(currentSymbol) && !OPEN_BRACKETS.includes(currentSymbol)) {
         stack.push(currentSymbol);
       } else {
         let topSymbol = stack[stack.length-1];
         if (currentSymbol === topSymbol && currentSymbol !== '[' && currentSymbol !== '(' && currentSymbol !== '{') {
           stack.pop();
         } else if (currentSymbol === BRACKETS_PAIR[currentSymbol]) {
           if stack.includes(currentSymbol))
           stack.pop();
         }
         
         else {
           stack.push(currentSymbol);
         } 
       }
     }
     return stack;
   }
 
isPair(test);  
*/