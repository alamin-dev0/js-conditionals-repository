// First task
let burgerPrice = 300;
if (burgerPrice >= 500) {
    console.log('Coke free')
}
else {
    console.log('30tk for coke price extra')
}


// Secound task 
let BMI = 26;


if (BMI < 18.5) {
    console.log('Underweight ')
}

else if (BMI > 18.5 && BMI < 24.9) {
    console.log('Normal BMI')
}
else if (BMI > 25 && BMI < 29.9) {
    console.log('Overweight')
}
else {
    console.log('he are obese')
}

// 3Th task 

let myReslt = 83;
let myFdResult = 24;

// if (myReslt > 80 && myFdResult > 80) {
//     console.log('Go to lunch')
// }
// else if (myReslt > 80 && myFdResult > 60 || myFdResult < 80) {
//     console.log('Good Luck my fd')
// }
// else if (myReslt > 80 && myFdResult > 40 || myFdResult < 60) {
//     console.log('Ignor his sms')
// }
// else if(myReslt > 80 && myFdResult < 40){
//       console.log('block him')
// }
if (myReslt > 80 && myFdResult > 80) {
    console.log('Go to lunch')
}
else if (myReslt > 80 && myFdResult > 60) {
    console.log('Good Luck my fd')
}
else if (myReslt > 80 && myFdResult > 40) {
    console.log('Ignor his sms')
}
else if (myReslt > 80 && myFdResult < 40) {
    console.log('block him')
}


let OneNumber = 100;
let twoNumber = 200;

OneNumber > twoNumber ?
    console.log(OneNumber * 2) :
    console.log(OneNumber + twoNumber)