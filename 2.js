function Fun(exp){
   exp=exp.replace(/\s+/g,'');
   let a=0;
   let ans=0;
   let sign=1;
   for(let i=0;i<exp.length;i++){
    let char=exp[i];
    if(!isNaN(char))a=a*10+parseInt(char,10);
    else if(char==='+'){
      ans+=sign*a;
      a=0;
      sign=1;
    }
    else if(char==='-'){
      ans+=sign*a;
      a=0;
      sign=-1;
    }
   }
   ans+=sign*a;
   return ans;
}
const exp="1+2-4+5";
console.log(Fun(exp));