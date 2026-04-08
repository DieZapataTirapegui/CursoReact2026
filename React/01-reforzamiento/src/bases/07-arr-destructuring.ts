const characterNames: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [goku, vegeta, trunks] = characterNames;
const [, vegeta2,] = characterNames;
const [, , trunks2] = characterNames;

console.log(goku);
console.log(vegeta);
console.log(trunks);
console.log(vegeta2);
console.log(trunks2);

const returnsArrayFn = () => {
    return ['ABC', 123] as const // Esto es para que TypeScript infiera los tipos literales en lugar de generalizarlos a string y number;
}

const [letters, numbers] = returnsArrayFn();

console.log(letters);
console.log(numbers);


//La funcion use state debe retornar un arreglo con dos elementso un string (El valor inicial) y una funcion anonima de flecha que recibe un string e imprime ese string en consola
const useState = (value: any) => {
    return [
        value, 
        (newValue: any) => console.log(newValue)] as const
}

const [state, setName] = useState('Goku');

console.log(state);
setName('Vegeta');