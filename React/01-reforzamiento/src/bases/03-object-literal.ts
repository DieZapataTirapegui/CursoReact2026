interface Person {
    firstname: string;
    lastName: string;
    age: number;
    adress?: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstname: 'Tony',
    lastName: 'Stark',
    age: 45
    // adress: {
    //     postalCode: '12345',
    //     city: 'New York',
    // }
}

 
// const spiderman = {...ironman, adress: {...ironman.adress}}; // Clonamos el objeto ironman y su propiedad adress  

// const spiderman = structuredClone(ironman); // Clonamos el objeto ironman y su propiedad adress con la función structuredClone

// spiderman.firstname = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 18;
// spiderman.adress.postalCode = '54321';
// spiderman.adress.city = 'Cleveland';


console.log(ironman);
// console.log(spiderman); 