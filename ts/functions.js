"use strict";
function fullName(firstName, lastName, title) {
    if (title === void 0) { title = "Mr"; }
    return title + "." + firstName + "," + lastName;
}
console.log(fullName("Bala"));
// function double(x: number) {
//   return x * 2;
// }
var double = function (x) {
    var r = x + x;
    return r;
};
double(10);
function add(x, y, z) {
    if (typeof x == "string" && typeof y == "string")
        return x + y;
    if (typeof x == "number" && typeof y == "number")
        return x + y;
    return "incorrect usage";
}
add(10, 20);
