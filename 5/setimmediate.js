var fs = require('fs');

setInterval(function () {
    var timeData = process.hrtime();
    console.log("Timeout  ", timeData[0] + '.' + Math.floor(timeData[1]/10000000));
}, 300);

var cpuHog = function cpuBoundFunction(iteration) {
    var a = [];
    var start = process.hrtime();
    for(var j = 0; j < 10000000; j ++) {
        a.push(Math.floor(Math.random() * 10000000));
    }
    var end = process.hrtime(start);
    console.log("CPUHOG: iteration", iteration, "completed in", end);
    return;
};

setTimeout(function () {
    for (var i = 0; i < 5; i++) {
        console.log("CPUHOG: iteration", i);
        cpuHog(i);
        // setImmediate(cpuHog, i);
    }
}, 3000);

