const personDataLog = ({firstname = 'John', lastname = 'Doe', age = 33} = {}) =>
    console.log(`My name is ${firstname} ${lastname}, Im ${age} years old.`);

personDataLog();