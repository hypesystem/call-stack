var CallStack = require("../CallStack.js");

var stack = new CallStack();

console.log("outside functions", stack.toString(3));

function a() {
    b();
}

function b() {
    c();
}

function c() {
    var stack = new CallStack();
    d(stack);
}

function d(stack) {
    console.log("from d (created in c)", stack.toString(3));
}

a();

