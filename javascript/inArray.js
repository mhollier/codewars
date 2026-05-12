function inArray(array1, array2) {
    return array1.filter(s1 => array2.some(s2 => s2.includes(s1))).sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(["xyz", "live", "strong"], a2));
console.log(inArray(["live", "strong", "arp"], a2));
