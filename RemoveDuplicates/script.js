//array remove duplicates
// remove array duplicates. do not alter the orioriginal array.  retyurn a new array with results in oriforiginal order.
// ex: [1,2,1,3,4,2]
// -=> [1,2,3,4]


function removeDups(arr){
  let copy = [];
  if(arr.length<2){
    return arr;
  }
  for(let i = 0; i<arr.length; i++){
    copy.push(arr[i]);
    for(let j = 0; j<copy.length-1; j++){
      if(arr[i]==copy[j]){
        copy.pop();
        continue;
      }
    }
  }
  console.log(copy);
  return copy;
}

removeDups([1,1,2,3,2,3,4,5,4,4,5,6,7,8,9,55,5,4]);
