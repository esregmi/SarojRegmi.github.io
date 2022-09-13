/* eslint-disable*/
/**
 * 
 */
/*
"use strict";
const key = [3,1,2,4];
let student1 = {
    studentId : s101
    quizAnswers : [1,1,2,4]
}
let student2 = {
    studentId : s102
    quizAnswers : [2,1,2,2]
}
let student3 = {
    studentId: s103
    quizAnswers : [3,1,3,4]
}
function gradeQuiz(studentAns, correctAns){
    let numCorrect =0;
    for (let i=0; i<correctAns.length; i++){
        if (correctAns[i] === studentAns.quizAnswers[i]){
            numCorrect++;
        }
 
    }
    return numCorrect;
}
console.log("expect3 : ", studentScore(student1,correctAns));
console.log("expect3 : ", studentScore(student1,correctAns));
console.log("expect3 : ", studentScore(student1,correctAns));

// key = correctAns

function stuResult (){
    .......

}
*/
const properties = ["one", "two", "three", "four"];
const numbers = {
    one:1,
    two:22,
    three:333,
    four:4444
}
for(const prop of properties){
    console.log(numbers[prop]);
}
