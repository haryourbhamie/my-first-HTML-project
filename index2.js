
let person = {
    name: 'Ayobami',
    age: 30,
};

// dot Notation
person.name = 'Mathew';

// Bracket Notation is used when the property is to be determined during runtime
let selection = 'name';
person[selection] = 'Oye';

console.log(person)

