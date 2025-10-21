// const age = 17;
// const foodPrice = 500;


// if (age > 12) {
//     console.log('they are free no pay ')
// }
// else if ((age > 12 && age < 18)|| age > 50) {
//     // 50% discount
//     const discount = foodPrice * 50 /
//         console.log(foodPrice - discount)
// }

const age = 40;
const foodPrice = 500;

if (age <= 12){
    console.log('You can eat for free')
}
else if (age >= 60) {
    const discount = foodPrice * 50 / 100;
    const payAmaount = foodPrice - discount;
    console.log(payAmaount)
}
else if (age >= 50){
    // 25% discount
    discount = foodPrice * 25 /100;
    payAmaount= foodPrice - discount;
    console.log(payAmaount)
}
else if (age >= 40){
    // 10% discount
    discount = foodPrice * 10 / 100;
    payAmaount = foodPrice - discount ;
    console.log(payAmaount)
}
else {
    console.log(foodPrice)
}