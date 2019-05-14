"use strict";
var TypedStack = /** @class */ (function () {
    function TypedStack() {
        this._items = [];
    }
    Object.defineProperty(TypedStack.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    TypedStack.prototype.push = function (item) {
        this._items.unshift(item);
    };
    TypedStack.prototype.pop = function () {
        return this._items.shift();
    };
    return TypedStack;
}());
var s1 = new TypedStack();
s1.push(10);
s1.push(20);
s1.pop();
console.log(s1.items);
