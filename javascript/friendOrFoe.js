function friend(friends) {
    const lettersOnly = /^[a-z]+/i
    return friends.filter(name => name.length === 4 && lettersOnly.test(name));
}

console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Ryan", "Jimmy", "1234", "4", "Cool Man"]))
console.log(friend(["Love", "Your", "Face", "1"]))
