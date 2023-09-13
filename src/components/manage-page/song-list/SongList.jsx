import { SongItem } from './SongItem'
import classes from '../../../styles/manage.module.css'
import { selectSongs } from '../../../store/manage-songs/manageSongs.selectors'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetSongs } from '../../../store/manage-songs/manageSongs.thunk'
import { useEffect } from 'react'
import { SongsService } from '../../../services/songs.service'

export const SongList = () => {
  const columns = [
    {
      name: 'Title',
      align: 'text-left',
    },
    {
      name: 'Artist',
      align: 'text-left',
    },
    {
      name: 'Genre',
      align: 'text-left',
    },
    {
      name: 'Favorites',
      align: 'text-center',
    },
    {
      name: 'Details',
      align: 'text-center',
    },
  ]

  const songs = useSelector(selectSongs)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(handleGetSongs())
    SongsService.getUserSongs().then((resp) => {
      console.log({ resp })
    })
  }, [])

  return (
    <section className="mt-4">
      <table width="100%">
        {/* columns */}
        <thead className="sticky top-[72px] bg-gray-100">
          <tr className="h-10">
            {columns.map((column) => (
              <th key={column.name} className={`${column.align}`}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        {/* rows */}
        <tbody className={classes['table__show-colored-rows']}>
          {songs.map((song) => (
            <SongItem key={song.title} song={song} />
          ))}
        </tbody>
      </table>
    </section>
  )
}
