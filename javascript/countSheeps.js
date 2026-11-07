// https://www.codewars.com/kata/54edbc7200b811e956000556
function countSheeps(sheep) {
  return sheep.filter(x => x === true).length;
}

console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]));