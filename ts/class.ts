class Stack {
  private _items: Array<any> = [];
  get items() {
    return this._items;
  }
  push(item: any): void {
    this._items.unshift(item);
  }
  pop(): any {
    return this._items.shift();
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.pop();
console.log(s.items);
