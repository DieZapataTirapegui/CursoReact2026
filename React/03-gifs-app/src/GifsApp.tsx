import React from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { CustomSearch } from './shared/components/CustomSearch';
import { PreviousSearches } from './gifs/components/PreviousSearches' 
import { GifsList } from './gifs/components/GifsList';

export const GifsApp = () => {
  return (
    <>
        <CustomHeader title='Gifs App' description='Descubre y comparte los mejores gifs del momento' />

        <CustomSearch />

        <PreviousSearches placeholder='Busca lo que deseabas antes' searches={ ['Elden Ring', 'Darksouls', 'Sekiro'] } />

        <div className='gifs-container'>
            {mockGifs.map((gif) => (
                <GifsList key={gif.id} gifs={[gif]} />
            ))}
        </div>
    </>
  )
}
