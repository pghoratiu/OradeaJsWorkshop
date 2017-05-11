var async = require("async");
var util = require("./util.js");


/*
 * Try each async call until the first one succeeds
 *  
 */
async.tryEach([
    function (next) {
        return util.asyncFunctionAlpha(next);
    },
    function (next) {
        return util.asyncFunctionBeta(next);
    }
], 
function (err, result) {
    if (err) {
        console.log("async.try - completed in error with message <", err, ">");
        return ;
    }

    console.log("async.try - completed success with message <", result, ">");
})