// let importObj = require('./cupcake-printer.cjs')

// // let prettyPrintCupcake = importObj.prettyPrintCupcake
// what's much more common than the above is below
let {prettyPrintCupcake} = require('./cupcake-printer.cjs')


const cupcakes = [
    {
      flavor: 'vanilla',
      price: 2.0,
    },
    {
      flavor: 'chocolate',
      price: 2.5,
    },
    {
      flavor: 'red velvet',
      price: 3.0,
    },
  ];

  for (const cupcake of cupcakes) {
    console.log(prettyPrintCupcake(cupcake));
  }

  