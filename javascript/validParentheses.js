function validParentheses(parenStr) {
  let result = 0;
  for (let c of parenStr) {
    result = c === '(' ? result + 1 : result - 1;
    if (result < 0)
      return false;
  }
  return result === 0;
}

console.log(validParentheses("())(()"));
console.log(validParentheses("((())"));

console.log(validParentheses(")(()))"));
console.log(validParentheses("()()("));
console.log(validParentheses("()"));
console.log(validParentheses("()(())((()))(())()"));
console.log(validParentheses(""))