const { get } = require("node:http");

// Exercise 1:
function multiply(a, b) {
    return a*b;
}

console.log("Tích của 2 và 3 là: " + multiply(2, 3));
console.log("Tích của 4 và 10 là: " + multiply(4, 10));


// Exercise 2:
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}

console.log("Số nhỏ nhất trong 3 số 10, 21, 16 là: " + findMin(10, 21, 16));
console.log("Số nhỏ nhất trong 3 số 540, 1000, 124 là: " + findMin(540, 1000, 124));


// Exercise 3:
let students = [
    {name: "Nguyen Van A", score: 7}, 
    {name: "Tran Thi B", score: 9}, 
    {name: "Le Van C", score: 6}, 
    {name: "Pham Thi D", score: 8}];
let threshold = 8.5;

function getTopStudents(students, threshold) {
    let getTopStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            getTopStudents.push(students[i].name);
        }
    }
    return getTopStudents;
}

console.log(getTopStudents(students, threshold));


// Exercise 4:
function calculateInterest(principal, rate, years) {
    for (let i = 0; i < years; i++) {
        let interest = principal * rate / 100;
        let total = principal + interest;
        console.log("Năm " + (i+1) + ": " + "tiền gốc = " + principal + ", tiền lãi = " + interest + " => tổng : " + total);
        principal = total;
    }
    return principal;
}

let principal = 10000000;
let rate = 6;
let years = 3;

console.log(calculateInterest(principal, rate, years));