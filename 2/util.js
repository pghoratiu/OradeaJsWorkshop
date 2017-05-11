exports.asyncFunctionAlpha = function(cb) {
    var timeout = Math.floor((Math.random() * 2) + 1);
    console.log("Alpha: to be called in", timeout, "seconds");
    return setTimeout(() => {
        if (timeout == 1) {
            console.log("Alpha: Error");
            return cb("Alpha: error callback");
        } else {
            console.log("Alpha: success");
            return cb(null, "alpha data")
        }
    }, timeout*1000);
};

exports.asyncFunctionBeta = function(cb) {
    var timeout = Math.floor((Math.random() * 2) + 1);
    console.log(" Beta: to be called in", timeout, "seconds");
    return setTimeout(() => {
        if (timeout == 1) {
            console.log(" Beta: Error");
            return cb(" Beta: error callback")
        } else {
            console.log(" Beta: success");
            return cb(null, "beta data");
        }
    }, timeout*1000);
};
