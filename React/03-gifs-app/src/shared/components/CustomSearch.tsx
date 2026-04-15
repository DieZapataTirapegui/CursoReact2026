import React, { useState, useEffect, type KeyboardEvent } from 'react'

interface Props {
  placeholder?: string
  onQuery: (query: string) => void
  contador?: number
}

export const CustomSearch = ({ placeholder='Buscar Gifs', onQuery }: Props) => {

  const [query, setQuery] = useState('');

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
    setQuery('');
  }
  
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    // console.log(event) // En el event siempre habra un campo key que registra la tecla usada
    if(event.key === 'Enter'){
      handleSearch();
    }
  }

  return (
    <div className='search-container'>
        <input 
          type="text" 
          placeholder={ placeholder }
          value={query}
          onChange={ (event) => setQuery(event.target.value) }
          onKeyDown={ (event) =>{  
            handleKeyDown(event)
          }}
        />
        <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
