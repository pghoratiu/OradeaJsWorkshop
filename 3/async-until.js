var async = require("async");

/*
 * Until random timeout is 2 it will continue calling the callback and 
 * run the callback. 
 */
var timeout = 0;
async.until(
    function () { return timeout == 1; },
    function (cb) {
        timeout = Math.floor((Math.random() * 2) + 1);
        setTimeout(function () {
            console.log("New Timeout: ", timeout);
            return cb(null, "success timeout " + timeout);
        }, 1000);
    },
    function (err, data) {
        if (err) {
            console.log("Async.until - completed with error <", err, ">");
            return;
        }
        console.log("Async.until - completed with success <", data, ">");
        return;
    }
);
