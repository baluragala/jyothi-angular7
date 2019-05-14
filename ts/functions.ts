function fullName(
  firstName: string,
  lastName?: string,
  title: string = "Mr"
): string {
  return `${title}.${firstName},${lastName}`;
}

console.log(fullName("Bala"));

// function double(x: number) {
//   return x * 2;
// }

let double = (x: number) => {
  let r = x + x;
  return r;
};
double(10);

// function Point(x, y) {
//   this.x = x;
//   this.y = y;
//   this.plot = () => {
//     return `(${this.x},${this.y})`;
//   };
// }
// var p1 = new Point(10, 20);
// ref = p1.plot;
// ref();

function add(x: number, y: number, z?: string): string | number;
function add(x: string, y: string, z?: string): string | number;
function add(
  x: number | string,
  y: string | number,
  z?: string
): number | string {
  if (typeof x == "string" && typeof y == "string") return x + y;
  if (typeof x == "number" && typeof y == "number") return x + y;
  return "incorrect usage";
}

add(10, 20);
