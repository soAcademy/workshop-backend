interface IF11Args {
  a1: number | string;
  a2: number | string;
}

const f11 = (x: IF11Args) => `${x.a1} ${x.a2}`;  //just an example of formatting

interface IF12Args {
  num1: number[];
}

const f12 = (args: IF12Args) => args.num1.reduce((acc, r) => acc + r, 0);

interface IF13Args {
  a1: number;
  a2: string;
  a3: IF12Args;
}

const f13 = (args: IF13Args) => args.a3.num1.reduce((acc, r) => acc + r, 0);
console.log(
  f13({
    a1: 10,
    a2: "Teak",
    a3: {
      num1: [1, 2, 3],
    },
  })
);

interface IF14Args extends IF13Args {
  a4: boolean;
}

const f14 = (args: IF14Args) => args.a3.num1.reduce((acc, r) => acc + r, 0);
console.log(
  f14({
    a1: 10,
    a2: "Teak",
    a3: {
      num1: [1, 2, 3],
    },
    a4: true,
  })
);

interface IF15Args {
  data: IF14Args[];  //store the array of f14
}

interface IF14Result {
  a1: number;
  a2: string;
}

const f14_1 = (args: IF14Args): number => 
args.a3.num1.reduce((acc, r) => acc + r, 0)
