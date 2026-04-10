import React from 'react'
import type { FC } from 'react'

interface Props {
    placeholder?: string
    searches: string[]
}

export const PreviousSearches: FC<Props> = ({ placeholder, searches }) => {
  return (
    <div className='previous-searches'>
        <h2>{placeholder || 'Busquedas previas'}</h2>
        <ul className='previous-searches-list'>
            {searches.map((term) => (
                <li key={term}>{term}</li>
            ))}
        </ul>
    </div>
  )
}
