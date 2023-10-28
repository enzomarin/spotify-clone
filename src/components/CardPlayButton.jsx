import { Play, Pause } from "./Player"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButton ({id, size = 'small'}) {
  const {isPlaying, currentMusic, setIsPlaying, setCurrentMusic} = usePlayerStore(state => state)
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

  const handleClick = () => {
    if(isPlayingPlaylist){ // Pausar
      setIsPlaying(false)
      return
    }
    
    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then(res => res.json())
      .then(data => {
        const {songs, playlist } = data
        setIsPlaying(true)
        setCurrentMusic({
          songs,
          playlist,
          song: songs[0]
        })
      })
   
  }


  return(
    <button onClick={handleClick} className="card-play-button bg-green-500 rounded-full p-4 hover:scale-[1.01] transition hover:bg-green-400">
      {isPlayingPlaylist ? <Pause/> : <Play/>}
    </button>
  )
}