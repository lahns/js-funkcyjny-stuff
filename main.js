const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek", "Mariusz"];
const numbers = [-12,1,2,4,5,-2,8,9,-1,-6];

let initialValue = 0;
const substractFromInitial = numbers.reduce(
    (previousValue, currentValue) => previousValue - currentValue, initialValue
    );

const mergeTwoArrays = (arr1, arr2) => [...arr1, ...arr2];
const lastItem = (arr) => arr.reverse()[0];
const filteredArray = (arr, value) => arr.filter(result => result === value);
const sumElements = (arr) => arr.reduce((sum, item) => sum + item, 0)
const whatever = (arr) => arr.map(item => item**2 + 3)
const fireOrMore = (arr) => arr.filter(result => result.length <= 5 && result.includes('ek', result.length-2));
const onlyEvenNumbers = (arr) => arr.filter((n) => n % 2 == 0);
const smallestNumber = (arr) => arr.reduce((currSmall = arr[0], newNumber) => currSmall > newNumber ? newNumber : currSmall); 

console.log(substractFromInitial);
console.log(mergeTwoArrays(arr1, arr2));
console.log(lastItem(arr2));
console.log(filteredArray(arr2, "Zarek"));
console.log(sumElements(numbers))
console.log(whatever(numbers))
console.log(fireOrMore(arr2))
console.log(onlyEvenNumbers(numbers))
console.log(smallestNumber(numbers))