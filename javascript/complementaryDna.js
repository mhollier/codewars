function complement(symbol) {
    switch (symbol) {
        case 'A':
            return 'T';
        case 'T':
            return 'A';
        case 'C':
            return 'G';
        case 'G':
            return 'C';
    }
    return '';
}

function DNAStrand(dna) {
    return [...dna].map(c => complement(c)).join('');
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));
