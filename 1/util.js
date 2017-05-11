exports.asyncFunctionAlpha = function(cb) {
    var timeout = Math.floor((Math.random() * 5) + 1);
    console.log("Alpha: to be called in", timeout, "seconds");
    return setTimeout(() => {
        console.log("Alpha: completed");
        cb();
    }, timeout*1000);
};

exports.asyncFunctionBeta = function(cb) {
    var timeout = Math.floor((Math.random() * 5) + 1);
    console.log(" Beta: to be called in", timeout, "seconds");
    return setTimeout(() => {
        console.log(" Beta: completed");
        cb();
    }, timeout*1000);
};

exports.asyncFunctionGamma = function(cb) {
    var timeout = Math.floor((Math.random() * 5) + 1);
    console.log("Gamma: to be called in", timeout, "seconds");
    return setTimeout(() => {
        console.log("Gamma: completed");
        cb();
    }, timeout*1000);
};
