import { SongItem } from './SongItem'
import classes from '../../styles/manage.module.css'

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

export const SongList = ({ songs }) => {
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
            <SongItem key={song.id} song={song} />
          ))}
        </tbody>
      </table>
    </section>
  )
}
