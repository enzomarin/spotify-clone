import { useEffect, useRef, useState } from "react"

const Pause = () => {
  return(
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" data-test="icon-PlaybackPause"><path clip-rule="evenodd" d="M5 22.5H8C8.55 22.5 9 22.05 9 21.5V2.5C9 1.95 8.55 1.5 8 1.5H5C4.45 1.5 4 1.95 4 2.5V21.5C4 22.05 4.45 22.5 5 22.5ZM16 22.5H19C19.55 22.5 20 22.05 20 21.5V2.5C20 1.95 19.55 1.5 19 1.5H16C15.45 1.5 15 1.95 15 2.5V21.5C15 22.05 15.45 22.5 16 22.5Z" fill="#FCFCFC" fill-rule="evenodd"></path></svg>)
}

const Play = () =>{
  return(
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" data-test="icon-PlaybackPlay"><path d="M5 2.9V21.1C5 21.9 5.9 22.4 6.55 21.9L19.8 12.8C20.4 12.4 20.4 11.55 19.8 11.15L6.55 2.1C5.9 1.6 5 2.1 5 2.9Z" fill="#FCFCFC"></path></svg>)
}


export function Player (){
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)
  const audioRef = useRef()

  const handleClick = () => {

    if(isPlaying){
      audioRef.current?.pause()
    }else{
      audioRef.current.src = `/music/1/01.mp3`
      audioRef.current?.play()
      audioRef.current.volume = 0.1
    }

    setIsPlaying(!isPlaying)
  }


  return(
    <div className="flex flex-row justify-between">
      <div>
        Current Song..
      </div>

      <div className=" grid place-content-center gap-4 flex-1">
        <div className="flex justify-center">
          <button className="rounded-full p-2" onClick={handleClick}>
            {isPlaying ? <Pause/> : <Play/>}
          </button>
        </div>
      </div>

      <div className="">
        controles
      </div>
      <audio ref={audioRef}/>
    </div>
  )
}