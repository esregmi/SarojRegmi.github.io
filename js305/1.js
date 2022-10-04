// "use strict";
// /* eslint-disable */
// /**
//  *
//  * @param {*} players
//  */
// function averagePoints(players) {
//   let arrayOfAveragePoints = [];
//   let objOfAveragePoint = {};
//   for (let player of players) {
//     let points = player.points;
//     let sum = 0;
//     points.map((item) => (sum = sum + item));
//     let average = sum / points.length;
//     average = Number(average.toFixed(2));

//     // arrayOfAveragePoints.push(average);
//     objOfAveragePoint[player.name] = average;
//   }
//   arrayOfAveragePoints.push(objOfAveragePoint);
//   return arrayOfAveragePoints;
// }
// const player1 = { name: "Bob", points: [1, 2, 1] };
// const player2 = { name: "Andre", points: [2, 0, 1] };
// const player3 = { name: "Max", points: [1, 1, 1] };
// const players = [player1, player2, player3];
// console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints(players));

// function score() {
//   let averageArray = [];
//   let play = averagePoints(players);
//   for (let scores of play) {
//     for (let score in scores) {
//       averageArray.push(scores[score]);
//     }
//   }
//   return averageArray;
// }

// console.log(score(players));
myObj.[[Prototype]] = {name: "grandfather"};