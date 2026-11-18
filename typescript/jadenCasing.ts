// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/typescript
String.prototype.toJadenCase = function () {
  return this.split(" ").map(w => w.charAt(0).toUpperCase() + w.substring(1)).join(" ");
}


interface String {      // Declaration needed, don't remove it
  toJadenCase(): string;
}

console.log("How can i be real if our eyes aren't real".toJadenCase())