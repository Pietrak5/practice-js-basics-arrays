const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = getEvenNumbers(numbers);
const sum = getSum(evenNumbers); // 2 + 4 = 6;
console.log(sum); // 6;

function getEvenNumbers(arr) {
    const evenNumbers = [];
    for(let i=0; i<arr.length; i++) {
    if(arr[i] % 2 === 0) {
    evenNumbers.push(arr[i]);
    }
    }
    return evenNumbers;
}

function getSum(arr) {
    let sum = 0;
    arr.forEach(function(num) {
    sum += num;
    });
    return sum;
    }

//   reduce filter
const newArr = numbers.filter(number => number % 2 === 0);
const sumFromArr = newArr.reduce((acc, curr) => acc + curr, 0);

console.log(sumFromArr);
