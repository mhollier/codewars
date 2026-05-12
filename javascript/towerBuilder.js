function towerBuilder(nFloors) {
    let tower = [];
    for (i = 0; i < nFloors; i++) {
        const spaces = " ".repeat(nFloors - i - 1)
        const stars  = "*".repeat(2 * (i + 1) - 1)
        tower.push(spaces + stars + spaces);
    }
    return tower;
}

console.log(towerBuilder(1).join("\r\n"));
console.log(towerBuilder(2).join("\r\n"));
console.log(towerBuilder(5).join("\r\n"));
