//longest word

function longestword(sen){
  const wordarr = sen.toLowerCase().match(/[a-z0-9]+/g);
  
  
  //sorted by length
  const sorted = wordarr.sort((a,b) => b.length - a.length);

//if multiple word put them into array
  const longestword = sorted.filter((word) => word.length === sorted[0].length);

//if one word return that word other wise array
  if(longestword.length ===1)
  {
    return longestword[0];
  }
  else {
    return longestword
  }
}

function chunkarr(arr,len){
  // 1 solution
// const charr = [];
// let i=0;

// while(i<arr.length)
// {
//   charr.push(arr.slice(i,i+len));
//   i+=len;

//2 solution

const charr = [];

arr.forEach(function(val){
  const last=charr[charr.length - 1];

  if(!last || last.length === len )
  {
    charr.push([val]);
  }
  else {
    last.push(val)
  }
});
return charr;

}

function flattenarr(arrays)
{
  //1 solution
// const arr=[];
// let i=0;
// while(i<arrays.length)
// {
//  for(let j=0; j<arrays[i].length;j++){
   
//    arr.push(arrays[i][j])
   
//  }
//  i++;
// }
// return arr;


//2 solution

// return arrays.reduce((a,b) => a.concat(b));

//3 solution

//return [].concat.apply([],arrays);

//4 solution

return [].concat(...arrays)


}

function isanagram(str1,str2)
{
return formatStr(str1) === formatStr(str2)
}
//helper function
function formatStr(str)
{
  return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join();
}

//Letter change

function letterchanges(str)
{
  let newStr.replace(/[a-z]/gi , function (char) {
  if(char==='z' ||      char==='Z')
    {
      return 'a';
    }
    else{
      return String.fromCharCode(char.charCodeAt()+1);
    }
  });

  newStr=newStr.replace(/[a|e|i|o|u]/gi. function(vowel){
    return vowel.toUpperCase();
  })
  return newStr
}


const output=letterchanges('Hello there');
console.log(output);