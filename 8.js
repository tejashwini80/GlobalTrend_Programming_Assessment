//Hashmap in JavaScript
class Hashmap{
  constructor(){
    this.map={};
  }

  put(key,value){
    this.map[key]=value;
  }
  get(key){
    return this.map[key];
  }
  remove(key){
    if(this.map.hasOwnproperty(key)){
      delete this.map[key];
    }
  }
}