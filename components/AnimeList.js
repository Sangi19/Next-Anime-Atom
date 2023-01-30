import React from 'react'
import AnimeCard from './AnimeCard'

export default function AnimeList({animes}) {
  return (
    <div>
        <div>
        {
            animes.map((anime)=>
              <div key={anime.mal_id}>            
                <AnimeCard  anime={anime} />
              </div>
            )
        }
        </div>   
    </div>
  )
}
