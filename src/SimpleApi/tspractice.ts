const f1 = (x: number, y: number) => Math.min(x, y);
const f2 = (x: string, y: string) => x + y;
const f3 = (x: boolean, y: number) => (x ? y : -y);
const f4 = (x: Date) => new Date(x).toLocaleDateString();
const f5 = (x: number[]) => x.reduce((acc, e) => acc + e, 0);
const f6 = (x: string[]) => x.join("###");
const f7 = (x: { a1: number; a2: number }) => x.a1 + x.a2;
const f8 = (x: { a1: number; a2: number[] }) =>
  x.a1 + x.a2.reduce((acc, e) => acc + e, 0);
const f9 = (x: { a1: string; a2: number }[]) => x[0].a2 + x[1].a2;

console.log(f1(3, 5));
console.log(f2("Hello", "Earth"));
console.log(f3(false, 5));
console.log(f4(new Date()));
console.log(f5([1, 2, 3, 4, 5]));
console.log(f6(["hello", "earth", "555 "]));
console.log(f7({ a1: 30, a2: 40 }));
console.log(f8({ a1: 20, a2: [12, 3, 4, 5] }));
console.log(
  f9([
    { a1: "Hello", a2: 25 },
    { a1: "earth", a2: 3 },
  ])
);

// Interface
interface IF10Args {
  a1: string;
  a2: number;
}
const f10 = (x: IF10Args[]) => x[0].a2 + x[1].a2;
console.log(
  f10([
    { a1: "Earth", a2: 25 },
    { a1: "Earth", a2: 30 },
  ])
);
interface IF11Args {
  a1: number | string;
  a2: number | string;
}
const f11 = (x: IF11Args) => `${x.a1} ${x.a2}`;
console.log(f11({ a1: "Hello", a2: 15 }));
interface IF12Args {
  num1: number[];
}
const f12 = (x: IF12Args) => x.num1.reduce((acc, e) => acc + e, 0);
console.log(f12({ num1: [12, 3, 3, 4] }));
interface IF13Args {
  a1: number;
  a2: string;
  a3: IF12Args;
}
const f13 = (x: IF13Args) => x.a3.num1.reduce((acc, e) => acc + e, 0);
console.log(f13({ a1: 14, a2: "Hello", a3: { num1: [12, 2, 3, 4] } }));
interface IF14Args extends IF13Args {
  a4: boolean;
}
const f14 = (x: IF14Args) => x.a4 && x.a3.num1.reduce((acc, e) => acc + e, 0);
console.log(f14({ a1: 14, a2: "Hello", a3: { num1: [1, 2, 3, 4] }, a4: true }));

interface IF15Args {
  data: IF14Args[];
}
const f15 = (x: IF15Args) =>
  x.data[0].a3.num1.reduce((acc, e) => acc + e, 0) +
  x.data[1].a3.num1.reduce((acc, e) => acc + e, 0);
console.log(
  f15({
    data: [
      { a1: 14, a2: "Hello", a3: { num1: [1, 2, 3, 4] }, a4: true },
      { a1: 14, a2: "Hello", a3: { num1: [1, 2, 3, 4] }, a4: true },
    ],
  })
);

// Force Type mostly used when a function return type any but we've already known the output's type

const f14_1 = (x: IF14Args): number => x.a3.num1.reduce((acc, e) => acc + e, 0);
const f14_2 = (x: IF14Args) =>
  x.a3.num1.reduce((acc, e) => acc + e, 0) as number;
const f14_3 = (x: IF14Args): { a1: number; a2: string } => ({
  a1: 3,
  a2: "earth",
});
const f14_4 = (x: IF14Args) =>
  ({ a1: 3, a2: "earth" } as { a1: number; a2: string });

interface IF14Result {
  a1: number;
  a2: string;
}
const f14_5 = (x: IF14Args): IF14Result => ({ a1: 3, a2: "earth" });
const f14_6 = (x: IF14Args) => ({ a1: 3, a2: "earth" } as IF14Result);
