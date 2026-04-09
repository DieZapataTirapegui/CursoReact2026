import type { CSSProperties } from "react";


export const  MyAwesomeApp = () => {
    const name = 'Diego'
    const surname = 'Tirapegui'

    const favoriteGames = ['Elden Ring', 'Hollow Knight', 'Dark Souls']
    const isActive = true;

    const address = {
        street: 'Calle Falsa',
        zipCode: '12345',
        country: 'Argentina'
    }

    const myStyle: CSSProperties = {
                        backgroundColor: 'blue',
                        borderRadius: '5px',
                        padding: '10px',
                    }
    return (
        <div>
            <h1 data-testid="name">{name}</h1>
            <h3>{surname}</h3>

            <p className="mi-clase-favorita"> { favoriteGames.join(', ')}</p>

            <ul>
                {favoriteGames.map((game, index) => (
                    <li key={index}>{game}</li>
                ))}
            </ul>
            <p>{2+2}</p>
            <h1>{isActive ? 'Active' : 'Inactive'}</h1>
            <p>{address.street}, {address.zipCode}, {address.country}</p>
            <p>{JSON.stringify(address)}</p>
            <p  style={
                    myStyle
                }>

                    a
            </p>
        </div>
    )
}