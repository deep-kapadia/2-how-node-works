// console.log(arguments);
// console.log(require("module").wrapper);

//module.exports
// const C = require("./test-module-1");
// const calc1 = new C();

// console.log(calc1.add(7, 5));

//exports
const { add, divide, multiply } = require("./test-module-2");
console.log(multiply(2, 2));

//Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
