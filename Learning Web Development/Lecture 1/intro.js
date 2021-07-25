// console.log("Hello World");

// let a;

// a = 5 / 2;
// console.log(a);

// a = "This is string with double qoutes";
// console.log(a);

// a = "This is string with single qoutes";
// console.log(a);
// for (let i = 0; i <= 10; i++) {
//     console.log("Hello brother " + i);
// }

// function isPrimeFunc(input) {
//     //Enter your code here
//     let isPrime = true;
//     for(let i = 2;i*i<=input;i++){
//         if(input%i == 0){
//            isPrime = false;
//             break;
//            }
//     }
//     return isPrime;
// } 
function processData(n) {
    let rows = n + 2;
    let mid = Math.floor((rows / 2)) + 1, pst = mid - 1, ast = mid + 1;
    for (let i = 1; i <= n; i++)
    {
        for (let j = 1; j <= pst; j++)
        {
            process.stdout.write("*");
        }
        for (let j = pst + 1; j < ast; j++)
        {
            process.stdout.write(" ");
        }
        for (let j = ast; j <= rows; j++)
        {
            process.stdout.write("*");
        }
        if (i <   Math.floor((n / 2))+ 1)
        {
            pst--;
            ast++;
        }
        else
        {
            pst++;
            ast--;
        }
        console.log();
    }
} 

processData(3);
// console.log();
// processData(7);
// console.log();
// processData(9);