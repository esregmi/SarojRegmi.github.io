
"use strict";
function scoreExams(studentAnswers,correctAnswers){
	let scoretest = [];
	//let count =0;
	for (let i= 0; i< studentAnswers.length; i++){
        let count =0;
		for (let j =0; j< studentAnswers[i].length; j++){
			if(studentAnswers[i][j] === correctAnswers[j]){
				count++;
			}
		}
		scoretest.push(count);
	}
	return scoretest;
}
