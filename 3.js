function FlattenArray(arr){
  let ans=[];
  function fun(subArr){
    for(let ele of subArr){
      if(Array.isArray(ele))Flat(ele);
      else ans.push(ele);
    }
  }
  fun(arr);
  return ans;
}