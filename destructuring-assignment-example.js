
// let names = ["alpha", "beta", "gamma", "delta"];
// let [firstName, secondName, thirdName] = names;
//
// console.log(firstName)
// console.log(secondName)
// console.log(thirdName)


//hoặc

// let [firstName, secondName, thirdName] = ["alpha", "beta", "gamma", "delta"];
//
// console.log(firstName)
// console.log(secondName)
// console.log(thirdName)


//hoặc
function NamesList() {
    return ["alpha", "beta", "gamma", "delta"]
}
let [firstName, secondName] = NamesList();

console.log(firstName);//"alpha"
console.log(secondName);//"beta"

// //hoặc
// let marks = {x: 2, y: -34, z: 47 };
//
// const { x, y, z } = marks; // x = 21, y = -34, z = 47
//
// console.log(x);
// console.log(y);
// console.log(z);
 //hoặc


const marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
console.log(alpha1, beta1); // 15, 16