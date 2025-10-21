/**
 * ternary  -- > three parts
 * 
 * 
 * ?       ;
 * condition ? do somthing when true : do somthing when false 
 * 
 */
// const age = 19
// if (age >= 18) {
//     console.log(
//         'you can vote'
//     )

// }

// else {
//     console.log('ghumai thako ')
// }

// age >= 18 ? console.log('Vote dio ') : console.log('Ghumai thako')
// let price = 500;
// const isLeader = false;
// if (isLeader === true) {
//     price = 0
// }
// else {
//     price = price + 100;
// }
// console.log(price)
let price = 500;
const isLeader = false;
price = isLeader === true ? 0 : price + 100;
console.log(price)



// OPTIONAL : semi advance ternary 

if (isLeader === true) {
    if (price > 1000) {
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 1000;
}


// feel free to ignor this one 

// price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;
price = isLeader === true ?
    price > 1000 ?
        price / 2 : 0
    : price + 1000;


