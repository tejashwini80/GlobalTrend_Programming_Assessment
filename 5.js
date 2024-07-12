function Remove(arr){
  const ans=new Set(arr);
  return [...ans];
}

//another one 
function remove(arr){
  return arr.filter((ele,i)=>arr.indexOf(ele)===i);
}