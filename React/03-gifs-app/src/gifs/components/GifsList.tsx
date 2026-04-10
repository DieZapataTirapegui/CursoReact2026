import React from 'react'
import type { Gif } from '../../mock-data/gifs.mock';

interface Props {
    gifs: Gif[]
}

export const GifsList = ( { gifs }: Props ) => {
  return (
    <div className='gif-card'>
        <img src={gifs[0].url} alt={gifs[0].title} />
        <h3>{gifs[0].title}</h3>
        <p>{gifs[0].width} x {gifs[0].height}</p>
    </div>
  )
}
 