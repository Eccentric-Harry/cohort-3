"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1;
console.log(x);
function greet(name) {
    console.log("Hello " + name);
}
greet("Hari");
function sum(a, b) {
    return a + b;
}
console.log(sum(12, "1"));
function delayedCall(fn) {
    setTimeout(fn, 3000);
}
delayedCall(() => {
    console.log("From the delayed function call!");
});
function delayedGreeting(fn) {
    setTimeout(fn, 3000);
}
delayedGreeting(greet);
//# sourceMappingURL=index.js.map