//Declaration (notice there is no semicolon)
//Function expressions in JavaScript are hoisted
function add5(x){
  return x+5;
}
console.log(add5(1));

//Expression
//Function expressions in JavaScript are NOT hoisted
const add6 = function(x){
  return x+6;
};
console.log(add6(1));

//Arraow function are also Expression
const add7 = (x)=>x+7;
console.log(add7(1));
