function Capitalize(s){
  return s.split(' ').map(a=>{
    return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase();
  }).join(' ');
}