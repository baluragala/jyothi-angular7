class TypedStack<T> {
  private _items: Array<T> = [];
  get items() {
    return this._items;
  }
  push(item: T): void {
    this._items.unshift(item);
  }
  pop(): T | undefined {
    return this._items.shift();
  }
}

let s1 = new TypedStack<number>();
s1.push(10);
s1.push(20);
s1.pop();
console.log(s1.items);
