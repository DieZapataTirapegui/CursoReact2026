const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
}

const { name, age, key } = person;

// console.log(name);
// console.log(age);
// console.log(key);

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({ name, age, key, rank }: Hero) => {
    return {
        keyName: key,
        user: {
            name, 
            age,
        },
        rank: rank || 'No tiene rank'
    }
}

const { keyName, user, rank } = useContext(person);
const { name: userName, age: userAge } = user;

console.log(keyName);
console.log(user);
console.log(rank);
console.log(userName);
console.log(userAge);