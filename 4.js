function Anagram(s1,s2){
   s1=s1.replace(/[^a-z A-Z 0-9]/g,'').toLowerCase();
   s2=s2.replace(/[^a-z A-Z 0-9]/g,'').toLowerCase();
   if(s1.length!==s2.length)return false;
   const chars={};
   for(let char of s1){
    chars[char]=(chars[char]||0)+1;//map
   }
   for(let char of s2){
    if(!chars[char])return false;
    chars[char]--;
   }
   return true;
}