function isUppercase(value) {
    return value === String(value).toUpperCase();
}
function isNull(value) {
    return value === null;
}
function isArray(value) {
    return (value instanceof Array);
}

const Greet = function (name) {
    let greeting = ''
    if (isUppercase(name)) {
        greeting = `Hello, ${name}!`;
    } 
    else if (isNull(name)) {
        greeting = 'Hello there!';
    }
    else if (isArray(name)) {
        let persons = name.join(', ');
        greeting = `Hello, ${persons}`;
    }
    else {
        greeting = `Hello, ${name}`;
    }
    return greeting;
}

module.exports = Greet;