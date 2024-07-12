function FilterEven(arr){
  return arr.filter(n=>n%2!==0); //filters out even
}

//another function
function FilterEven(arr){
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0) console.log(arr[i]); //prints the even numbers
  }
}