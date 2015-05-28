var _ = require("lodash");

var CallStack = function() {
    this.stack = getStack();
};

function getStack() {
    var prepareStackTrace = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack) {
        return stack;
    };
    var error = new Error();
    var stack = error.stack;
    Error.prepareStackTrace = prepareStackTrace;
    return _.drop(stack, 2);
}

CallStack.prototype.toString = function(max) {
    return getFunctionChainString(this.stack, max);
};

function getFunctionChainString(stack, max) {
    var chain = getFunctionChain(stack, max);
    return functionChainToString(chain);
}

function getFunctionChain(stack, max) {
    var chain = _.map(stack, function(entry) {
        return entry.fun;
    });

    if(chain.length > max) {
        return _.take(chain, max);
    }
    return chain;
}

function functionChainToString(chain) {
    var fun = chain.shift();

    var name;
    if(!fun) {
        name = "?";
    }
    else {
        var name = getFunctionName(fun);
    }

    if(chain.length > 0) {
        return name+" <- "+functionChainToString(chain);
    }
    return name;
}

function getFunctionName(fun) {
    var str = fun.toString();
    str = str.substring("function ".length);
    str = str.substring(0, str.indexOf("("));
    str = str.trim();
    if(str == "") {
        str = "<anonymous>";
    }
    return str;
}

module.exports = CallStack;

