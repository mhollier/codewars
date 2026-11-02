# Remove duplicates from list
def distinct(seq):
  dedup = []
  for x in seq:
    if dedup.count(x) == 0:
      dedup.append(x)
  return dedup

print(distinct([1, 1, 1, 2, 3, 4, 5]))