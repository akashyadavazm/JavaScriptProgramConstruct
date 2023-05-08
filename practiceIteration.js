let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// -->-->-->Normal For Loop -->-->-->
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
}

// -->-->-->For Each Loop-->-->-->
numbers.forEach((element, i, j) => {
    console.log(element, i, j);
});

// -->-->--> For Of Loop -->-->-->
for (const element of numbers) {
    console.log(element);
}

for (const element in numbers) {
    console.log(element, numbers[element]);
}

// -->-->--> Some Map And Filter Operations -->-->-->
const arr = numbers.map((element) => element + 5);
console.log(arr);

const arrEven = numbers.filter((element) => element % 2 == 0);
console.log(arrEven);