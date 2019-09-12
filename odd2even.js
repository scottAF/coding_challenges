

function evenOdd(arr) {
  even = [];
  odd = [];



  arr.forEach(element => {
    if (element % 2 == 0)
    even.push(element);
    else
      odd.push(element);
  });

return [even, odd];
}

nums =  [1, 2, 3, 4, 5, 6, 7, 8, 9];

function test(item) {
  if (evenOdd(nums) == [ 2, 4, 6, 8 ], [ 1, 3, 5, 7, 9 ]) return "pass";
  else return "fail";
}

console.log(test(evenOdd));



// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     even.push(arr[i]);
//   }
//   else {
//     odd.push(arr[i]);
//   }
// }