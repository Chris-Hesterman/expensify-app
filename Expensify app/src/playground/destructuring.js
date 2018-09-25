const person = {
    
    age: 49,
    location: 'Seattle',
    temp: 65
}

const {name = 'fred', age, location, temp: temperature} = person;
console.log(`I am ${name}, I am ${age} and I live in ${location} where it is ${temperature} degrees atm`);

