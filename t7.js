// Print the first 10 numbers of the Fibonacci series (0, 1, 1, 2, 3 …).


let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 0; i < 8; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}