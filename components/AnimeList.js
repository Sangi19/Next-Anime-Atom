import React from 'react'
import AnimeCard from './AnimeCard'

export default function AnimeList({anime_object}) {
  return (
    <div>
        <div>
        {
            anime_object.map((anime)=>
              <div key={anime.id}>            
                <AnimeCard anime={anime} />
              </div>
            )
        }
        </div>   
    </div>
  )
}
