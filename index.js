// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log("#1:")
console.log(Array.isArray(a));
console.log(Array.isArray(b));



// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
console.log("#2:")
a.forEach(element => {
    console.log(element * 2);
});

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
console.log("#3:")
//case 1 output: 'Red Green White Black'
var output = '';
colors.forEach(element => {
    output += element + ' ';
});
console.log(output);
// case 2 output: 'Red+Green+White+Black'
output = '';
colors.forEach(element => {
    output += element + '+';
});
console.log(output);
// case 3 output: 'Red,Green,White,Black'
output = '';
colors.forEach(element => {
    output += element + ',';
});
console.log(output);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4, 3, 2, 6, 7, 9];
console.log("#3:")
var head = 0;
var tail = 1;
var iterations = 0;
//TODO should output: [10,8,5,4,1]
while (iterations <= a.length * a.length) {
    if (a[head] < a[tail]) {
        var setter = a[head];
        a[head] = a[tail];
        a[tail] = setter;
    }
    iterations++;
    head++;
    tail++;
    if (iterations%a.length-1==0) {
        head = 0;
        tail = 1;
    }
}
console.log(a);
// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log("#4:")
//TODO should output: 'a'
for (let index = 0; index < a.length; index++) { 
    var uniqueValues = Array.from(new Set(a));
    var countArray = new Array(uniqueValues.length);
    for (let index = 0; index < countArray.length; index++) {
        countArray[index] = 0;
    }
    uniqueValues.forEach(element => {
        a.forEach(aElement => {
            if(element==aElement){
                countArray[uniqueValues.indexOf(element)] +=1;
            }
        });
    });
}
const maxCount = countArray;
console.log(uniqueValues[countArray.indexOf(Math.max(...maxCount))]);