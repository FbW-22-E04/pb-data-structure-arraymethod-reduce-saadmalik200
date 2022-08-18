//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
//1

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },

  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(array) {
  //write your code here

  const newobj = array.reduce((accum, item) => {
    const id = item.id;
    // console.log(id);

    if (accum[id] === undefined) accum[id] = {};
    accum[id] = item;
    // console.log(accum);
    return accum;
  }, {});
  return newobj;
}

let usersById = groupById(users);

// console.log(usersById);

/* expected output: 

{
  john: { id: 'john', name: 'John Smith', age: 20 },
  ann: { id: 'ann', name: 'Ann Smith', age: 24 },
  pete: { id: 'pete', name: 'Pete Peterson', age: 31 }
}


*/

console.log(`------------------------------------`);

/**
 * 01
 * Create a function that cleans trailing and leading spaces from an array of products
 * 
 * Example:
 * Array [
[
    {
      name: "  D3 5000 iu",
      description: "Takes care of your immune system",
      price: 10,
    },
    {
      name: "  C 1000mg ",
      description: "180 tabs of vitamin C with Bioflanoids",
      price: 3,
    },
    {
      name: " B - Complex 50 mg    ",
      description: "Balanced mix of all basic B vitamins",
      price: 13,
    },
]
 * 
 * should become [
 * 
 *  {
      name: "D3 5000 iu",
      description: "Takes care of your immune system",
      price: 10,
    },
    {
      name: "C 1000mg",
      description: "180 tabs of vitamin C with Bioflanoids",
      price: 3,
    },
    {
      name: "B - Complex 50 mg",
      description: "Balanced mix of all basic B vitamins",
      price: 13,
    },
 * 
 * ]
 * 
 * 
 */

function cleaningTailingSpace(arr) {
  // console.log(arr);

  const newArr = arr.reduce((accum, item) => {
    const name = item.name.trim();
    // console.log(name);
    // return name;
    // if (accum[name] === undefined) accum[name] = {};
    // item[name] = name;
    // accum[name] = item;
    item.name = name;
    // console.log(item);
    accum.push(item);
    return accum;
  }, []);
  // console.log(newArr);
}

cleaningTailingSpace([
  {
    name: "  D3 5000 iu",
    description: "Takes care of your immune system",
    price: 10,
  },
  {
    name: "  C 1000mg ",
    description: "180 tabs of vitamin C with Bioflanoids",
    price: 3,
  },
  {
    name: " B - Complex 50 mg    ",
    description: "Balanced mix of all basic B vitamins",
    price: 13,
  },
]);

// function cleanSpaces(productsArray){

//     productsArray.forEach((element) => {
//         element.name = element.name.trim();
//     });

//     return productsArray
// }

/**
 * 02
 * Create a function to convert miles to kilometers at the end of each property of each item in an arrray
 *
 * Example:
 *
 * [
 * {
 *  city: 'Berlin',
 *  distance: '639mi'
 * },
 *  {
 *  city: 'Paris',
 *  distance: '1040mi'
 * }
 * ]
 *
 * should become:
 *
 * [
 *  {
 *  city: 'Berlin',
 *  distance: '1028km'
 * },
 *  {
 *  city: 'Paris',
 *  distance: '1673km'
 * }
 * ]
 */

function mileToKm(array) {
  array.forEach((item, i) => {
    // console.log(item);
    const dist = item.distance.slice(0, -2); //* 1.60934;
    const newDist = (dist * 1.60934).toFixed() + "km";
    // console.log(newDist);
    item.distance = newDist;
  });
  console.log(array);
}

mileToKm([
  {
    city: "Berlin",
    distance: "639mi",
  },
  {
    city: "Paris",
    distance: "1040mi",
  },
]);
// should become:

// [
//  {
//  city: 'Berlin',
//  distance: '1028km'
// },
//  {
//  city: 'Paris',
//  distance: '1673km'
// }
