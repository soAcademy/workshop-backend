// ฝึกการเขียนฟังก์ชันที่มันซับซ้อนขึ้นจากเมื่อก่อน

const f1 = (x: number, y: number) => Math.min(x, y);
console.log(f1(1, 5));

const f2 = (x: string, y: string) => x + y;
console.log(f2("hello", "Bond"));

const f3 = (x: boolean, y: number) => (x ? y : -y);
console.log(f3(true, 5));

const f4 = (x: Date) => new Date(x).toLocaleDateString();
console.log(f4(new Date()));

const f5 = (x: number[]) => x.reduce((acc, r) => acc + r, 0);
console.log(f5([1, 2, 3, 4, 5]));

const f6 = (x: string[]) => x.join("###");
console.log(f6(["hello", "Bond", "Bond"]));

const f7 = (x: { a1: number; a2: number }) => x.a1 + x.a2;
console.log(f7({ a1: 10, a2: 20 }));

const f8 = (x: { a1: number; a2: number[] }) =>
  x.a1 + x.a2.reduce((acc, r) => acc + r, 0);
console.log(f8({ a1: 10, a2: [20, 30, 40] }));

const f9 = (x: { a1: string; a2: number }[]) => x[0].a2 + x[1].a2;
console.log(
  f9([
    { a1: "Bond", a2: 10 },
    { a1: "World", a2: 20 },
  ])
);
