// Exercise 1
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}

console.log("Năm sản xuất của xe: " + car.year);


// Exercise 2
let person = {
    name: "Nguyet",
    address: {
        street: "Nui Thanh",
        city: "Da Nang",
        country: "Vietnam"
    },
}

console.log("Tên đường là: " + person.address.street);


// Exercise 3
let student = {
    name: "Linh",
    grades: {
        math: 8,
        english: 9
    }
}

console.log("Điểm môn toán là: " + student["grades"]["math"]);


// Exercise 4
let settings = {
    volumn: 50,
    brightness: 70,
}

settings.volumn = 65;
console.log(settings);


// Exercise 5
let bike = {
    make: "Honda",
    model: "CBR",
    year: 2020
}

bike.color = "Blue";
console.log(bike);


// Exercise 6
let employee = {
    name: "An",
    age: 25
}

delete employee.age;
console.log(employee);

// Exercise 7
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
}
