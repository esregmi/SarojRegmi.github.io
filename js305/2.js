"use strict";
/* eslint-disable */
function checkExam(studentAns, correctAns) {
  let score = 0;

  for (let i = 0; i < studentAns.length; i++) {
    if (studentAns[i] === correctAns[i]) {
      score = score + 4;
    } else score = score - 1;
  }
  if (score < 0) return 0;
  return score;
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));