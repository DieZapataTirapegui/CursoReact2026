import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { CustomSearch } from './shared/components/CustomSearch';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifsList } from './gifs/components/GifsList';
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState<string[]>(['dragon ball z', 'elden ring', 'darksouls 3', 'dead space']);

  const handleTermClicked = (term:string) => {
    console.log({term})
  }

  const [gifs, setGifs] = useState<any[]>([])

  const handleSearch = async (query: string, contador: number) => {
    if(query !== ''){
      const queryLowerCase = query.toLowerCase();
      const queryClean = queryLowerCase.trim();
  
      setPreviousTerms( [query, ...previousTerms.filter((term) => term.toLowerCase() !== queryClean)].splice(0, 8) );

      const gifsFromApi = await getGifsByQuery(queryClean);
      setGifs(gifsFromApi);
      // console.log({gifs})
    }
  }

  return (
    <>
        <CustomHeader title='Gifs App' description='Descubre y comparte los mejores gifs del momento' />

        <CustomSearch onQuery={ handleSearch } />

        <PreviousSearches placeholder='Busca lo que deseabas antes' searches={ previousTerms }  onLabelClicked={ handleTermClicked }/>

        <div className='gifs-container'>
            {gifs.map((gif) => (
                <GifsList key={gif.id} gifs={[gif]} />
            ))}
        </div>
    </>
  )
}
