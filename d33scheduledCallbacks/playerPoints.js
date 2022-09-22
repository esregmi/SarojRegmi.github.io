"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {findTotalScores, findTotalPlayerPoints }; //add all of your function names here that you need for the node mocha tests



/*Be sure to use meaningful variable names and write JSdoc comments for findTotalScores and any helper functions such as findTotalPlayerPoints.
Try to use map and reduce in your functions as appropriate. */

/**
 * 
 * @param {Array} teamStatisticsArr 
 * @returns {object} object with total points
 */

function findTotalScores(teamStatisticsArr) {
    let jerseyPoint = [];
    for(const player of teamStatisticsArr){
        jerseyPoint.push({jersey:player.jersey,total:findTotalPlayerPoints(player)})
    }
return jerseyPoint;
}


function findTotalPlayerPoints(player) {
    let totalScore = 0;
    for(const game of player.stats){
        totalScore += game.points;
    }
return totalScore;
}



