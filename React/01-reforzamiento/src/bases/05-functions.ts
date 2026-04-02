
function greet( name: string) {
    return `Hello, ${name}!`;
}

const greet2 = (name: string) => `Hello, ${name}!`;

const message = greet('Diego');
const message2 = greet2('Elena');

console.log(message);
console.log(message2);

function getUser() {
    return {
        uid: 'ABC123',
        username: 'diego'
    }
}

interface User {
    uid: string;
    username: string;
}

const getUser2 = (username: string, uid: string) => ({ uid, username });

const user = getUser();
console.log(user);

const user2 = getUser2('Elena', 'XYZ789');
console.log(user2);

const myNumbers = [1, 2, 3, 4, 5];

const double = (numbers: number[]) => numbers.map( n => n * 2 );

const doubledNumbers = double(myNumbers);
console.log(doubledNumbers);

myNumbers.forEach( (value, index, arr) => {
    console.log({ value, index, arr });
});