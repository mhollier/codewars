def to_jaden_case(string):
    result = ""
    prev = " "
    for c in string:
        result += c.upper() if prev == " " else c.lower()
        prev = c
    return result

print(to_jaden_case("How can mirrors be real if our eyes aren't real"))
