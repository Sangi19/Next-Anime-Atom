import AnimeList from "@/components/AnimeList"



export default function Home() {

  const anime_object=[
    {
      id:1,
      title: "mov 1",
      rating:4/10,
      genre:"comedy"
    },
    {
      id:2,
      title: "mov 2",
      rating:4/10,
      genre:"action"
    }
  ]


  return (
    <>
      <main>
        <h2>Anime project</h2>
        <div>
          <AnimeList anime_object={anime_object} />
        </div>
      </main>
    </>
  )
}
