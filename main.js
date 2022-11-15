const arr1 = ["Marek", "Czarek"];
const arr2 = ["Darek", "Zarek", "Tarek", "Garek", "Zarek"];
const numbers = [1,2,4,5,8,9];

let initialValue = 0;
const substractFromInitial = numbers.reduce(
    (previousValue, currentValue) => previousValue - currentValue, initialValue
    );

const mergeTwoArrays = (arr1, arr2) => [...arr1, ...arr2];
const lastItem = (arr) => arr.reverse()[0];
const filteredArray = (arr, value) => arr.filter(result => result === value);
const sumElements = (arr) => arr.reduce((sum, item) => sum + item, 0)
const whatever = (arr) => arr.map(item => item**2 + 3)

console.log(substractFromInitial);
console.log(mergeTwoArrays(arr1, arr2));
console.log(lastItem(arr2));
console.log(filteredArray(arr2, "Zarek"));
console.log(sumElements(numbers))
console.log(whatever(numbers))