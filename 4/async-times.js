var async = require("async");

/*
 * Make the same function call and collect the results in an object
 * See also 
 *   * timesSeries()
 *   * timesLimit(5, 2, )
 */

var count = 0;
async.times(5, function (n, next) {
    setTimeout(function () {
        var newRandomNumber = Math.floor((Math.random() * 3) + 1);
        console.log("Generated new random number", newRandomNumber);
        return next(null, newRandomNumber);
    }, 1000);
}, function (err, results) {
    if (err) {
        console.log("Error encountered", err);
        return ;
    }

    console.log("Function completed successfully: ");
    console.log(JSON.stringify(results, null, 2));
});