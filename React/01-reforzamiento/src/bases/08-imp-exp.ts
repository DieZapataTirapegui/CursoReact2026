import { heroes, type Hero } from "../data/heroes.data";


const getHeroById = (id: number): Hero => {
    const hero = heroes.find( hero => {
        return hero.id === id
    })

    if(!hero) throw new Error(`Heroe con la id ${id} no se encuentra`)

    return hero
}

console.log(getHeroById(2))

//Debo crear una funcion llamada getHeroByOwner que reciba un owner y retorne un arreglo con los heroes de ese owner

const getHeroByOwner = (owner: string): Hero[] => {
    const heroesByOwner = heroes.filter( hero => {
        return hero.owner === owner
    })

    if(heroesByOwner.length === 0) throw new Error(`No se encontraron heroes para el owner ${owner}`)

    return heroesByOwner
}

console.log(getHeroByOwner('DC'))