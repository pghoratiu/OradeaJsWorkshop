var util = require("./util.js");

util.asyncFunctionAlpha( () => {
    util.asyncFunctionBeta( () => {
        util.asyncFunctionGamma( () => {
        });
    });
});
