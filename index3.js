// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...numbers) {
 // solution 1
//   var args=Array.prototype.slice.call(arguments);
//   var total=0;
//   for(let i in args)
//   {
//     total+=args[i];
//   }

// return total;

// solution 2
// let total=0;
// numbers.forEach(num =>  
//   total+=num );

//   return total;

//solution 3
return numbers.reduce((acc, curr) => acc+=curr)
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  function checkforprime(i)
  {
    for (let j=2;j<i;j++)
    {
      if( i%j === 0)
      {
        return false;
      }
    }
    return true;
  }
  let total=0;
  for ( let i=2; i<=num;i++)
 { if(checkforprime(i))
  {
    total+=i;
  }
 }
 return total
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(array,...rest) {

// solution 1
// var ar1=rest.slice();
// var newarr=[];
// for(let i=0; i<array.length;i++)
// {
//   let j=0;
//   let check=false;
//   while (j<ar1.length)
//   {
//   if(array[i]==ar1[j] )
//   {
//     check=true;
//   }
//   j++;
//   }
//   if(check==false)
//   {
//     newarr.push(array[i])
//   }

// }
//return newarr;
// console.log(newarr);

return array.filter(val => !rest.includes(val));
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
const arr1=[];
const arr2=[];
a.forEach((val,i) => 
{
  if(val===-1)
  {
    arr1.push(i);
  }
  else
  {
    arr2.push(val)
  }
});

const sortarr=arr2.sort ((a,b) => a-b);
arr1.forEach((val,i) => sortarr.splice(arr1[i],0,-1));
return sortarr;
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
 let compare = str.charCodeAt(0);
 let missing;

 str.split('').map((char,i) =>
 {
   if(str.charCodeAt(i) == compare)
   {
     ++compare;
   }
   else { missing=String.fromCharCode(compare);}
 });
 return missing;
}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(array) {
  // solution 1
// let event = 0;
// let oddt = 0;
// for (let i=0; i<array.length;i++)
// {
//   if(array[i]%2 === 0)
//   {
//     event+=array[i];
//   }
//   else
//   {oddt += array[i];}
// }
// const arr=[];
// arr.push(event);
// arr.push(oddt);
// return arr;

// solution 2
let event = 0;
let oddt = 0;
 array.forEach(num => (num%2===0 ? event+=num : oddt+=num));
 return [event,oddt]
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180]
const output=evenOddSums([50, 60, 60, 45, 71]) ;
console.log(output);