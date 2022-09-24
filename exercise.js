// "use strict";
/*eslint-disable*/
/*
/*
const team= ["Bob","Fred","jim"];
// assigning individual varible to array element
let [bob, , jim]= team;
console.log(bob);
console.log(jim);

/*
/ const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }
const team = {power: "Jim", center: "Big Sleep" }
let {power,center} = team;
console.log("expect Big Sleep", center);
console.log("expect Jim", power);
*/
/*
let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user);
alert( user.friends[1] ); // 1
//create and log to the console a json string from john. Then create a new instance of john, johnClone, using
// JSON.parse. Is john === johnClone?
const john = {
name: "John",
surname: "Smith",
isAdmin: false,
birthday: {"year": 2000, "month": "February", "day": 3},
friends: [0,1,2,3]
};
const jonhJSON = JSON.stringify(john);
console.log("John string is :", jonhJSON);
const johnClone = JSON.parse(johnJSON);
*/
// Closure are the inner function always has access to the variable and parameters of its outer function, even after outer function has returned.
/*
function makeWorker() {
    let name = "Pete";
  
    return function() {
      console.log(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // what will it show?
  */
 /*
  let arr = [1, 2, 3, 4, 5, 6, 7];
  function inArray(arr) {
    return function(num){
        for(const element of arr){
            if(element===num){
                return true;
            }
        }
        return false;
    }
}
*/
/*
• write a function, multiplyEvens, that can be
called with any number of arguments and returns
the product of the even arguments
• do first using the arguments object
• then using …rest parameter
multiplyEvens(1, 6, 3, 4, 17, 2) → 48

 */
/*
function multiplyEvens(...more){
  let total = 1
  if(more.length>0){
    for(let i=0; i<more.length;i++){
      if(more[i]%2===0){
      total = total*more[i];
    }
    }
  }
  console.log("Total :", total);
  return total;
   }
   multiplyEvens(1, 6, 3, 4, 17, 2) // 48
  */
 /*
   "use strict";

   //The following objects record the season statistics for players on a basketball team.
   const player1 = {jersey: 8, stats: [ {game : 1, points: 6}, {game : 2, points : 7} ] };
   const player2 = {jersey: 12, stats: [ {game : 1, points: 16}, {game : 2, points : 14} ] };
   const player3 = {jersey: 6, stats: [ {game : 1, points: 10}, {game : 2, points : 6} ] };
   const teamStats = [player1, player2, player3];
   
   //Write a function, findHighScores, that finds the high score in the season for each player as follows:
   console.log("expect [{jersey: 8, high: 7}, {jersey: 12, high: 16}, {jersey: 6, high: 10}]: " , findHighScores(teamStats));
   
   /*Be sure to use meaningful variable names and write JSdoc comments for findHighScores and any helper functions. 
   You can write this in VS Code and then paste your solution into Sakai.
       
   Model Short Answer
   * create high score array
   * loop through players of teamStats
   * for each player,
   ** get their stats array
   ** find max points of the player
   ** create object with jersey and max points and push to high score array */
   /*
   /**
    * 
    * @param {Array} teamStatistics is array of players
    * @returns {Array} array of objects like {jersey: 12, high: 16}
    */
   /*
   */
  /*
   function findHighScores(teamStatisticsArr){
       const highScores = [];
       for (const player of teamStatisticsArr){
           highScores.push({jersey: player.jersey, high: findMax(player)});
       }
       return highScores;
   }
   /**
    * 
    * @param {Object} player is player object like {jersey: 6, stats: [ {game : 1, points: 10}, {game : 2, points : 6} ] };
    * @returns {number}  max points in game for a player, e.g., 10 in above array
    */
  
  /*
   function findMax(player){
       let maxPts = 0;
       for (const game of player.stats){
           if (game.points > maxPts){
               maxPts = game.points;
           }
       }
       return maxPts;
   }
   console.log("expect 10: ", findMax(player3));
   */
/*
   const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
   const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
   const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
   const teamStats = [player1, player2, player3];

   function findTotalPlayerPoints(player) {

    return player.stats.reduce((sum, curr)=>sum+=curr.points,0);
  }
    //console.log(findTotalScores(teamStats));
    console.log((findTotalPlayerPoints(player2)));
*/
/*
const abc = {
  salute: "",
  greet: function() {
  this.salute = "Hello";
  console.log(this.salute); //Hello
  const setFrench = function(newSalute) { //inner function
  this.salute = newSalute;
  };
  setFrench("Bonjour");
  console.log(this.salute); //Bonjour??
  }
  };
  abc.greet(); //Hello Hello ???
*/

// Fixing using arrow function [tested]
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
  this.students.forEach((student)=> {
  console.log(this.title + ': ' + student)
  });
  }
  };
  group.showList();

  // Fixing using Bind[tested]
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
    this.students.forEach(function(student) {
    console.log(this.title + ': ' + student)
    }.bind(this));
    }
    };
    group.showList();

