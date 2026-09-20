// Exercise 1:
let sum = 0;
for (let i = 1; i < 101; i++) {
    sum = sum + i;
}

console.log("Tổng từ 1 đến 100 là: " + sum);


// Exercise 2:

// Test
// let bangCuuChuong2 = [];
// for (let i = 1; i < 11; i++) {
//     bangCuuChuong2.push(" 2 x " + i + " = " + (2*i));
// }
// console.log("Bảng cửu chương 2 là: " + bangCuuChuong2);

// Dùng function
// function bangCuuChuong(n) {
//     let bangCuuChuongN = [];
//     for (let i = 1; i < 11; i++) {
//         bangCuuChuongN.push(" " + n + " x " + i + " = " + (n*i));
//     }
//     return bangCuuChuongN;
// }
// console.log("Bảng cửu chương 2 là: " + bangCuuChuong(2));
// console.log("Bảng cửu chương 3 là: " + bangCuuChuong(3));
// console.log("Bảng cửu chương 4 là: " + bangCuuChuong(4));

// Dùng nested loop
let bangCuuChuong = [];
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 11; j++) {
        bangCuuChuong.push(" " + i + " x " + j + " = " + (i*j));
    }
}

console.log("Bảng cửu chương là: " + bangCuuChuong);


// Exercise 3:
let oddNumbers = [];
for (let  i = 1; i <= 99; i++) {
    if (i%2 !== 0) {
        oddNumbers.push(i);
    }
}
console.log ("Các số lẻ từ 1 đến 99 là: " + oddNumbers);


// Exercise 4:
let danhSachEmail = [];
for (let i = 1; i <= 10; i++) {
    danhSachEmail.push("user" + i + "@example.com")
}
console.log(danhSachEmail);


// Exercise 5:
let doanhThuMotNam = [];
let tongDoanhThu = 0;

for (let i = 1; i <= 12; i++) {
    let month = {};
    month.month = i;
    month.total = 100;
    doanhThuMotNam.push(month);
    tongDoanhThu = tongDoanhThu + month.total;
}

console.log(doanhThuMotNam);
console.log("Tổng doanh thu trong năm là: " + tongDoanhThu);