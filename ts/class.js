"use strict";
var Stack = /** @class */ (function () {
    function Stack() {
        this._items = [];
    }
    Object.defineProperty(Stack.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Stack.prototype.push = function (item) {
        this._items.unshift(item);
    };
    Stack.prototype.pop = function () {
        return this._items.shift();
    };
    return Stack;
}());
var s = new Stack();
s.push(10);
s.push(20);
s.pop();
console.log(s.items);
