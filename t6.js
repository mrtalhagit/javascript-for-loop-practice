// Given [4, 9, 2, 15, 7], print the largest number using a loop (no Math.max).


let arr = [4, 9, 2, 15, 7];

let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);