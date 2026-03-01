// 1
let numbers1 = [1, 2, 3];
numbers1[1] = 10;
console.log("1:", numbers1);

// 2
let strings1 = ["яблуко", "банан", "груша"];
strings1.push("апельсин");
console.log("2:", strings1);

// 3
let numbers2 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
}
console.log("3: Сума =", sum);

// 4
let numbers3 = [5, 10, 15, 20, 25];

console.log("4:");
for (let i = 0; i < numbers3.length; i++) {
    console.log(numbers3[i]);
}

// 5
let strings2 = ["привіт", "кіт", "машина", "сонце", "код"];

console.log("5:");
for (let i = 0; i < strings2.length; i++) {
    if (strings2[i].length > 5) {
        console.log(strings2[i]);
    }
}

// 6
let numbers4 = [3, 7, 1, 9, 4, 12, 6, 2, 8, 5];
let max = numbers4[0];

for (let i = 1; i < numbers4.length; i++) {
    if (numbers4[i] > max) {
        max = numbers4[i];
    }
}
console.log("6: Максимальне число =", max);

// 7
let numbers5 = [3, 7, 4, 9, 10, 12, 6, 2, 8, 5];

console.log("7: Парні числа:");
for (let i = 0; i < numbers5.length; i++) {
    if (numbers5[i] % 2 === 0) {
        console.log(numbers5[i]);
    }
}