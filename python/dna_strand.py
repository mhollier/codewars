# Complementary DNA
# In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
# Your function receives one side of the DNA; you need to return the other complementary side.
# DNA strand is never empty or there is no DNA at all.
def DNA_strand(dna):
    result = ""
    for c in dna:
        match c:
            case "A":
                result += "T"
            case "T":
                result += "A"
            case "C":
                result += "G"
            case "G":
                result += "C"
    return result

print(DNA_strand("ATTGC"))
            
