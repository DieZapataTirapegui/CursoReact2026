export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

type Owner = 'DC' | 'Marvel';

// enum Owner {
//     DC, // DC = 0 o la podemos definir como DC = 'DC' y Marvel = 'Marvel'
//     Marvel // Marvel = 1
// } Este se usa como Owner.DC, Owner.Marvel 

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
  {
    id: 6,
    name: 'Daredevil',
    owner: "Marvel"
  }
];

export default {
    heroes
}