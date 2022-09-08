/* eslint-disable*/
/*
const scores = [10,20,30,40,50];

let sumis=0;
function findAverage(array){
for (let i = 0; i < array.length; i++){
   sumis = sumis + array[i];
  
}
return sumis/array.length;
}
console.log(findAverage(scores));
*/
/*
Given an expression array exp, write a program to examine whether the pairs and the of “{“, “}”
are balanced in exp.
- Use a for .. of loop through the expression array
- push any left bracket onto a stack
- on a right bracket pop the stack and check that return value is a left bracket
- if not, then not balanced
- if stack empty at end then balanced, else not balanced
Example:
Input: exp = [ "{", "}", "{", "{", "}", "}“ ]
Output: Balanced
Input: exp = [ "{", "{", "}", "{" ]
Output: Not Balanced 
 */
/* eslint-disable*/
const exp = [ "{", "}", "{", "{", "}","}“ ];

function balanced(arr){
    const bracketstack = [];
    for (const element of arr){
        if (element ==="{"){
            bracketstack.push(element);
        }
        if(element === "}"){
            const stackElement = bracketStack.pop();
            if (stackElement !=="{"){
                return false;
            }
        }
    }

}