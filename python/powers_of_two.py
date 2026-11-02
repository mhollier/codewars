def powers_of_two(n):
    result = []
    for i in range(n + 1):
        result.append(2 ** i)
    return result


print(powers_of_two(0))
print(powers_of_two(1))
print(powers_of_two(4))