// UYGA VAZIFA

// 1)

// function getLevel2(n) {
//   let arr = [];

//   for (i = 1; i <= n; i++) {
//     let result = [[2 ** i].push(arr)];
//     console.log(result);
//   }
// }
// getLevel2(4);

// function getLevel2(n) {
//   let result = [];
//   let raqam = 2;

//   for (let i = 1; i <= n; i++) {
//     result.push(raqam);
//     raqam *= 2;
//   }

//   return result;
// }

// console.log(getLevel2(5));

// 2)

// function oldingiYigindi(a, b, n) {
//   let arrBracket = [];
//   let hisob = a + b + n;

//   for (i = 0; i <= 5; i++) {
//     arrBracket.push(a, b, n, hisob);

//     return arrBracket;
//   }
// }

// console.log(oldingiYigindi(2, 3, 5));

// function oldingiYigindi(a, b, n) {
//     let arrBracket = [];
//     let hisob = a + b;

//     arrBracket.push(a, b);

//     for (let i = 2; i < n; i++) {
//         arrBracket.push(hisob);
//         hisob += arrBracket[i-1];
//     }

//     return arrBracket;
// }

// console.log(oldingiYigindi(2, 3, 5));

// 3)

// function teksari(n) {
//   let arrBracket = [];
//   let qavsda = arrBracket.push(n);

//   for (i = 0; i <= n; i++) {
//     let result = qavsda.reverse();
//   }

//   return result;
// }

// teksari(1, 4, 6);

// function teskari(arr) {
//   return arr.reverse();
// }

// let testArray = [1, 4, 6];
// console.log(teskari(testArray));

// 4)

// function toqlari(arr) {
//   let arrBracket = [];

//   for (i = 0; i <= arr.length(); i++) {
//     if (arr % 2 == 1) {
//       arrBracket.push();
//     }
//   }
// }

// console.log(arrBracket.sort());
// arr(2, 4, 6, 3, 7);

// 5)
