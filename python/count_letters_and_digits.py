def count_letters_and_digits(s):
    count = 0
    for c in s:
        if (c.isalnum()): count += 1
    return count


print(count_letters_and_digits("hel2!lo"))