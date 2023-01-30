import AnimeList from "@/components/AnimeList"
import { useEffect, useState } from "react"



export default function Home() {

const [animes, setAnimes] = useState([])

async function fetchAnimeData(){
const Data= await fetch("https://api.jikan.moe/v4/anime")
const animeData=await Data.json()
console.log(animeData.data)
setAnimes(animeData.data)
}

useEffect(() => {
  fetchAnimeData()
},[])

  return (
    <>
      <main>
        <h2>Anime project</h2>
        <div>
          {
           animes && animes.length ? <AnimeList animes={animes} /> : "no data"
          }          
        </div>
      </main>
    </>
  )
}
