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

// teskari(1, 4, 6);

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

// function sonlar(arr) {
//   let juftlari = [];
//   let toqlari = [];
//   for (i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       juftlari.push(arr[i]);
//     } else {
//       toqlari.push(arr[i]);
//     }
//   }

//   return juftlari.concat(toqlari.sort());
// }

// let arr = [4, 5, 7, 8, 6, 9];
// console.log(sonlar(arr));

// 7)

// function elementSeries(arr) {
//   let arrBracket = [];

//   for (let i = arr.length - 1; i >= 0; i -= 2) {
//     arrBracket.push(arr[i]);
//   }

//   return arrBracket;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(elementSeries(arr));

// 8)

// function jufttoq(arr) {
//   let arrBracket = [];
//   let juft = [];
//   let toq = [];

//   for (i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       juft.push(arr[i]);
//     } else {
//       toq.push(arr[i]);
//     }
//   }

//   return juft.concat(toq);
// }

// let arr = [1, 5, 8, 4, 9];
// console.log(jufttoq(arr));

// 9)

// function jufttoq(arr) {
//   let arrBracket = [];
//   let juft = [];
//   let toq = [];

//   for (i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       juft.push(arr[i]);
//     } else {
//       toq.push(arr[i]);
//     }
//   }

//   return toq.sort().concat(juft.reverse());
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(jufttoq(arr));

// 10)

// 11)

function rangeOutSum(arr) {
    
}
