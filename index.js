// var a;

// a = 1;

// a = 2;

// var a = 1;

// var a = 3;

// let a = 1;
// let a = 2;
{
  let a = 1;
  console.log(a);
}

{
  let a = 2;
  console.log(a);
}

let a = 1;
a = 2;

console.log(a);

// const a = 1;

// a = 2;

{
  const a = 1;

  console.log(a);
}

{
  const a = 2;
  console.log(a);
}

const fname = "Yagnesh";

const lname = "Modh";

const fullName = `${fname} ${lname}'s car`;

// const fullName = fname + "\t" + lname ;

console.log(fullName);

// yagnesh's car;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

const es5 =
  "<!DOCTYPE html>" +
  '\n<html lang="en">' +
  "\n<head>" +
  '\n\t<meta charset="UTF-8">' +
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
  '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
  "<title>Document</title>" +
  "</head>" +
  "<body>" +
  "" +
  "</body>" +
  "</html>";

// console.log(es5)

const es6 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`;

console.log(es6);

const a = 1;

const obj = {
  a: a,
  b: 2,
  c: function() {
    return this.a + this.b;
  }
};

console.log(obj.a);

const es6 = {
  a,
  b: 2,
  c() {
    return this.a + this.b;
  }
};

console.log(es6.a);
console.log(es6.c());
console.log(es6.b);

const a = 1;

// function abc() {

// }

// const abc = function() {

// }

const obj = {
  a: a,
  b: 2,
  c: function() {
    return this.a + this.b;
  }
};

console.log(obj.a);

const es6 = {
  a,
  b: 2,
  c() {
    return this.a + this.b;
  }
};

es6 = {};

console.log(es6.a);
console.log(es6.c());
console.log(es6.b);

// function add(a, b) {
//     return a + b;
// }

const add1 = function(a, b) {
  return a + b;
};

const add = (a, b) => a + b;

console.log(add(1, 2));
console.log(add1(1, 2));

// function calc(operation, a ,b) {
//     switch (operation) {
//         case 'add':
//             return a + b

//         case 'sub':
//             return a - b

//         case 'multiply':
//             return a - b

//         default:
//             return 0;
//     }
// }

const calc = (a, b) => {
  return operation => {
    return operation(a, b);
  };
};

const add = (a, b) => a + b;

const sub = (a, b) => a - b;

console.log(calc(1, 2)(sub));

// console.log(calc('add', 1, 2))

function add(a, b) {
  return a + b;
}

const sub = (a, b) => a - b;

class Animal {
  hasWings = false;

  constructor(type = "animal") {
    this.type = type;
  }

  // public type { get {} set {} }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value.toUpperCase();
  }

  sound() {
    setTimeout(() => {
      console.log(this.type);
    }, 0);
  }

  static sound1() {
    console.log("hello");
  }

  add(a, b) {
    return a + b;
  }

  sub = (a, b) => a - b;
}

const a = new Animal("dog");
a.sound();

class Cat extends Animal {
  constructor(type) {
    super(type);
  }

  sound() {
    super.sound();
    console.log("meoww...");
  }
}

const c = new Cat("Cat");

console.log(c.type);
c.sound();

const a = 3;

const b = 4;

const obj = { a: 1, b: 2, c: 3, c: 4 };

const { a: aa, b: bb } = obj;

console.log(aa);
console.log(bb);

// // delete obj.c;

// // console.log(obj)

// const {a, b, ...rest} = obj;

// console.log(a);
// console.log(b);

// console.log(rest)

// // // obj.d = 4;

// // // console.log(obj)

// // const obj1 = {c: 5, ...obj};

// // console.log(obj)

// // console.log(obj1)

// const users =  {
//     name: "yagnesh",
//     gender:"male",
//     age: 31,
//     parents: {
//         father: "A D Modi"
//     }
// };

// let {name, gender, age, ...rest1} = users;

// name ="hello";

// console.log(name)
// console.log(gender)
// console.log(age);

// console.log(users)

const arr = [1, 2, 3, 4, 5, 6, 7];

const [, , , ...rest] = arr;

console.log(rest);

// arr.push(8);
// arr.pop();

// console.log(arr);

// const arr1 = [...arr.slice(0, 4), 8,  ...arr.slice(4)];
// const arr1 = [...arr.slice(0, 3),  ...arr.slice(4)];

// const arr1 = arr.filter((x) => x  !== 4);

// console.log(arr1);

// const arr = [...Array(1000000).keys()];

// console.time("for loop");

// const newArr = [];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   newArr.push(element);
// }

// console.timeEnd("for loop");

// console.time("foreach loop");

// const newArr1 = [];
// arr.forEach(element => {
//   newArr1.push(element);
// });

// console.timeEnd("foreach loop");

// console.time("map loop");

// const newArr3 = arr.map(item => item);

// console.timeEnd("map loop");

const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map(x => {
  return x * 2;
});

console.log(newArr);

const newUsers = users.map(user => {
  let newUser = user;

  if (user.name === "yagnesh") {
    newUser = { ...user, gender: "male" };
  }
  if (newUser.gender === "male") {
    return { ...newUser, profession: "cricketer" };
  }
  return { ...newUser, profession: "actor" };
});

console.log(newUsers);

const arr = [1, 2, 3, 4, 5, 6];

// let sum = 10;

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     sum += element;
// }

// console.log(sum);

const sum = arr.reduce((p, c) => p + c, 0);

console.log(sum);

const arr = [...Array(1000000).keys()];

console.time("map loop");
const maps = arr.map(x => x);
console.timeEnd("map loop");

console.time("reduce loop");
const newArr = arr.reduce((p, c) => {
  return p;
}, []);
console.timeEnd("reduce loop");

// const reduces = arr.reduce((p, c) => {
//     return [...p, c];
// }, [])

// console.log(maps)
// console.log(reduces)

// const users = [{
//     name: 'rohit',
//     gender: 'male',
// }, {
//     name: 'virat',
//     gender: 'male'
// },{
//     name: 'yagnesh',
//     gender: 'mala'
// },{
//     name: 'deepika',
//     gender: 'female'
// }, {
//     name: 'radhika',
//     gender: 'female'
// }];

// console.time("Reduce loop");

// const newUsers = users.reduce((p, c) => {
//     let newUser = c;
//     if (c.name === "yagnesh") {
//             newUser = { ...c, gender: "male" };
//     }
//     if(newUser.gender === 'male') {
//         return [...p, {...newUser, profession: "cricketer"}]
//     }
//     return [...p, {...newUser, profession: "actor"}]
// }, []);

// console.timeEnd("Reduce loop");

// console.time("map loop");
// const newUsers1 = users.map(user => {
//     let newUser = user;

//     if (user.name === "yagnesh") {
//       newUser = { ...user, gender: "male" };
//     }
//     if (newUser.gender === "male") {
//       return { ...newUser, profession: "cricketer" };
//     }
//     return { ...newUser, profession: "actor" };
//   });

//   console.timeEnd("map loop");

// const a = null;
// const b = 2;

// const c = a && b;

// // console.log(c);

// // console.log(c)

const users = [
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "deepika",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

const groupBy = users.reduce((p, c) => {
  p[c.gender] = p[c.gender] || [];
  p[c.gender].push(c);
  return p;
}, {});

// const groupBy = (data, key) => {
//     return data.reduce((p, c) => {
//             (p[c[key]] = p[c[key]] || []).push(c);
//             return p;
//     } , {});
// }

// console.log(groupBy(users, 'gender'))

// {
//     male: [],
//     female: []
// }

const a = [1, 2, 3, 4, 5];

const obj = {
  a: 1,
  b: 2,
  c: 3
};

// for (const iterator of a) {
//     console.log(iterator);
// }
for (const [key, value] of Object.entries(obj)) {
  console.log(key);
  console.log(value);
}

// console.log(Object.keys(obj))

// for(let item in obj) {
//     console.log(item);
//     console.log(obj[item]);
// }

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolve");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolve");
  }, 1000);
});

// let loading = true;

// p1.then(val => {
//     console.log(`resolve ${val}`)
//     loading = false;
// }).catch(err => {
//     console.log(`error ${err}`)
//     loading = false;
// })

const func = async () => {
  let loading = true;
  try {
    const res = await Promise.race([p1, p2]);
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    let loading = false;
  }
};

console.log(func());

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolve");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolve");
  }, 1000);
});

// let loading = true;

// p1.then(val => {
//     console.log(`resolve ${val}`)
//     loading = false;
// }).catch(err => {
//     console.log(`error ${err}`)
//     loading = false;
// })

const func = async () => {
  let loading = true;
  try {
    const res = await p1;
    console.log(res);
    const res1 = await p2;
    console.log(res1);
  } catch (error) {
    console.log(error);
  } finally {
    let loading = false;
  }
};

console.log(func());

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolve");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolve");
  }, 1000);
});

function* xyz() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return "hello";
}

const gen = xyz();

// console.log(gen.next())

for (const iterator of gen) {
  console.log(iterator);
}
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

const arr = [
  {
    name: "yagnesh",
    age: 30
  },
  {
    name: "rohit",
    age: 32
  },
  {
    name: "radhika",
    age: 24
  },
  {
    name: "advik",
    age: 8
  }
];

// {
//     "0-9": [],
//     "20-29":[],
//     "30-39":[]
// }

const groupByAge = arr.reduce((p, c) => {
  const key = parseInt(c.age / 10);
  (p[`${key}0-${key}9`] = p[`${key}0-${key}9`] || []).push(c);
  return p;
}, {});

console.log(groupByAge);
