function ghostBusters(building) {
    const result = building.match(/[^\s]+/g).join("");
    return result.length === building.length ? "You just wanted my autograph didn't you?" : result;
}

console.log(ghostBusters("Factor y"));
console.log(ghostBusters("O  f fi ce"));
console.log(ghostBusters("BusStation"));
console.log(ghostBusters("Suite "));