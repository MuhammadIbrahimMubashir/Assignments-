"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mark(p) {
    if (p >= 90 && p <= 100) {
        console.log("A*");
    }
    else if (p >= 80 && p <= 89) {
        console.log("A");
    }
    else if (p >= 70 && p <= 79) {
        console.log("B");
    }
    else if (p >= 60 && p <= 69) {
        console.log("C");
    }
    else if (p >= 50 && p <= 59) {
        console.log("D");
    }
    else {
        console.log("Fail");
    }
}
mark(99.9);
