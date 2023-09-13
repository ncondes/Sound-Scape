import { SongItem } from './SongItem'
import { useSongs } from '../../hooks'

export const SongList = () => {
  const { songs, loading, error } = useSongs()

  return (
    <section className="container mx-auto">
      <div className="bg-white rounded border border-gray-200 flex flex-col">
        {/* header */}
        <div className="font-bold text-xl flex justify-between items-center p-6 border-b border-gray-200">
          <span>Songs</span>
          <i className="fa-solid fa-headphones-alt text-lime" />
        </div>
        {/* list */}
        <ul>
          {songs.map((song) => (
            <SongItem key={song.title} song={song} />
          ))}
        </ul>
      </div>
    </section>
  )
}
