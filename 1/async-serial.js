var async = require("async");
var util = require("./util.js");

var asyncFunctionAlpha = util.asyncFunctionAlpha;
var asyncFunctionBeta = util.asyncFunctionBeta;
var asyncFunctionGamma = util.asyncFunctionGamma;

async.series([
    function (next) { 
        return util.asyncFunctionAlpha(next) 
    },
    function (next) {
        return util.asyncFunctionBeta(next);
    },
    function (next) {
        return util.asyncFunctionGamma(next);
    }
], function(err, data) {
    console.log("Completed serial processing");
    return ;
});

// async.series([
//     asyncFunctionAlpha,
//     asyncFunctionBeta,
//     asyncFunctionGamma
// ], function(err, data) {
//     console.log("Completed serial processing");
// });


// async.parallel([
//     asyncFunctionAlpha,
//     asyncFunctionBeta,
//     asyncFunctionGamma
// ], function(err, data) {
//     console.log("Completed paralel processing");
// });

// async.parallelLimit([
//     asyncFunctionAlpha,
//     asyncFunctionBeta,
//     asyncFunctionGamma
// ], 2, function(err, data) {
//     console.log("Completed paralel processing");
// });