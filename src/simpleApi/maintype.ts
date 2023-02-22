const f1 = (x:number ,y:number) => Math.main(x,y);
const f2 = (x: string, y: string) => x + y;
const f3 = (x: boolean, y: number) => (x === true ? y : -y);
const f4 = (x: Date) => new Date(x).toLocaleDateString();
const f5 = (x: number[]) => x.reduce((acc, r) => acc + r, 0);
const f6 = (x: string[]) => x.join("###");
const f7 = (x: { a1: number, a2: number}) => x.a1 + x.a2;
const f8 = (x: { a1: number, a2: number[]}) => 
x.a1 + x.a2.reduce((acc, r) => acc + r, 0);
const f9 = (x: { a1: string, a2: number}[]) => x[0].a2 + x[1].a2;

console.log(f1(1,5));
console.log(f1("hallo","bin"));
console.log(f3(true, 5));
console.log(f4(new Date()));
console.log(f5([1, 2, 3, 4, 5]));
console.log(f6(["hallo","bin","world"]));
console.log(f7({a1: 10, a2: 20}));
console.log(f8({a1: 10, a2: [20, 30, 40] }));
console.log(f9([
  {a1: "bin" , a2: 10},
  {a1: "world" , a2: 20}
]));







