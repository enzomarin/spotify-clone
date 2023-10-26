
export function CurrentSong({image,title, artists}){
  return(
    <div className="flex items-center gap-5 relative overflow-hidden">
      <picture className=" w-16 h-16 bg-zinc-600 rounded-md shadow-lg">
        <img className="rounded-md" src={image} alt={title}/>
      </picture>

      <div className="flex flex-col">
        <h3 className="font-semibold text-sm block">
          {title}
        </h3>
        <span className="text-xs opacity-80">
          {artists?.join(', ')}
        </span>

      </div>
    </div>

  )
}