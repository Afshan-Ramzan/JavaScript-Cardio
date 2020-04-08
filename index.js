// ex. reverseString('hello') === 'olleh'
console.log("afshan");
console.log("afshan");

// ex. reverseString('hello') === 'olleh'


function reverseString(str) {
  //1--- return str.split('').reverse().join('')
 
//2
 // let Rstr = '';
 // for(let i=str.length-1;i>=0;i--)
 // {
 // 	Rstr = Rstr + str[i];
 // }
 // return str
//3
 // let Rstr = '';
 // for(let i=0;i<=str.length-1;i++)
 // {
 // 	Rstr =  str[i] +  Rstr;
 // }
 // return str
//4
//   let Rstr = '';
//   for(let char of str)
//   {
//  	Rstr=char+Rstr;
//  }
//   return Rstr

//  let restring='';
//  str.split('').forEach((char) => 
//    restring=char+restring);
// return restring;


//5

// return str.split('').reduce(function(revString, char)
// {
//   return char+revString;
// }, '');

return str.split('').reduce((revString, char) =>
char+revString
, '');

}

// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false


function isPalindrome(str)
{
   let revString = reverseString(str)

   return revString ===str
}


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int)
{
  const revstring = int.toString().split('').reverse().join('');

  return parseInt(revstring)* Math.sign(int);
}


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'


function Captilize(str)
{
  // const strarr = str.toLowerCase().split(' ');
  // for (let i =0; i<strarr.length;i++)
  // {
  //   strarr[i]= strarr[i].substring(0,1).toUpperCase() + strarr[i].substring(1);
  // }
  // return strarr.join(' ');

//2
// return str.toLowerCase().
// split(' ').
// map(word => word[0].toUpperCase()  +  word.substr(1)).join(' ');

//3

return str.replace(/\b[a-z]/gi, function(char){
  return char.toUpperCase();
} );

}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxchar(str)
{
  const charMap = {};
  let maxnum=0;
  let maxchar= '';
   str.split('').forEach(function(char){
     if(charMap[char]){
       charMap[char]++;
     }
     else {
       charMap[char]=1
     }
   });

   for (let char in charMap)
   {
     if(charMap[char]>maxnum)
     {
       maxnum=charMap[char];
       maxchar=char;
     }

   }
   return maxchar;
}
// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. 
//For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". 
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".


function fizzbuzz()
{
  for (let i =0 ;i <=100;i++)
  {
    if(i%3===0 && i%5===0)
    {
      console.log('fizzBuzz');
    }
    else if (i%5===0)
    {
      console.log('Buzz');
    }
    else if (i%3===0)
    {
      console.log('fizz');
    }
    else{
      console.log(i);
    }

  }
}


