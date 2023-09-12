import { SongItem } from './SongItem'
import classes from '../../../styles/manage.module.css'

export const SongList = () => {
  const songs = [
    {
      id: 1,
      title: 'Winds of Change',
      artist: ['Scorpions'],
      genre: 'Rock',
      favorites: 69,
    },
    {
      id: 2,
      title: 'Purple Haze',
      artist: ['Jimi Hendrix'],
      genre: 'Rock',
      favorites: 87,
    },
    {
      id: 3,
      title: 'Bohemian Rhapsody',
      artist: ['Queen'],
      genre: 'Rock',
      favorites: 105,
    },
    {
      id: 4,
      title: 'Imagine',
      artist: ['John Lennon'],
      genre: 'Pop',
      favorites: 91,
    },
    {
      id: 5,
      title: 'Hotel California',
      artist: ['Eagles'],
      genre: 'Rock',
      favorites: 78,
    },
    {
      id: 6,
      title: 'Ebony and Ivory',
      artist: ['Paul McCartney', 'Stevie Wonder'],
      genre: 'Pop',
      favorites: 54,
    },
    {
      id: 7,
      title: 'Under Pressure',
      artist: ['Queen', 'David Bowie'],
      genre: 'Rock',
      favorites: 62,
    },
    {
      id: 8,
      title: 'Stairway to Heaven',
      artist: ['Led Zeppelin'],
      genre: 'Rock',
      favorites: 93,
    },
    {
      id: 9,
      title: 'Rocket Man',
      artist: ['Elton John'],
      genre: 'Pop',
      favorites: 76,
    },
    {
      id: 10,
      title: "Sweet Child o' Mine",
      artist: ["Guns N' Roses"],
      genre: 'Rock',
      favorites: 88,
    },
    {
      id: 11,
      title: 'Like a Rolling Stone',
      artist: ['Bob Dylan'],
      genre: 'Rock',
      favorites: 70,
    },
    {
      id: 12,
      title: 'Billie Jean',
      artist: ['Michael Jackson'],
      genre: 'Pop',
      favorites: 82,
    },
    {
      id: 13,
      title: 'Angie',
      artist: ['The Rolling Stones'],
      genre: 'Rock',
      favorites: 45,
    },
    {
      id: 14,
      title: 'Let It Be',
      artist: ['The Beatles'],
      genre: 'Pop',
      favorites: 97,
    },
    {
      id: 15,
      title: 'Every Breath You Take',
      artist: ['The Police'],
      genre: 'Rock',
      favorites: 73,
    },
    {
      id: 16,
      title: 'Boogie Wonderland',
      artist: ['Earth, Wind & Fire'],
      genre: 'Disco',
      favorites: 62,
    },
    {
      id: 17,
      title: 'Yesterday',
      artist: ['The Beatles'],
      genre: 'Pop',
      favorites: 84,
    },
    {
      id: 18,
      title: "Livin' on a Prayer",
      artist: ['Bon Jovi'],
      genre: 'Rock',
      favorites: 79,
    },
    {
      id: 19,
      title: 'Purple Rain',
      artist: ['Prince'],
      genre: 'Pop',
      favorites: 88,
    },
    {
      id: 20,
      title: 'Sweet Home Alabama',
      artist: ['Lynyrd Skynyrd'],
      genre: 'Rock',
      favorites: 72,
    },
    {
      id: 21,
      title: 'Imagine',
      artist: ['John Lennon'],
      genre: 'Pop',
      favorites: 91,
    },
    {
      id: 22,
      title: 'November Rain',
      artist: ["Guns N' Roses"],
      genre: 'Rock',
      favorites: 68,
    },
    {
      id: 23,
      title: 'Like a Prayer',
      artist: ['Madonna'],
      genre: 'Pop',
      favorites: 55,
    },
    {
      id: 24,
      title: 'Hotel California',
      artist: ['Eagles'],
      genre: 'Rock',
      favorites: 78,
    },
    {
      id: 25,
      title: 'Radio Ga Ga',
      artist: ['Queen'],
      genre: 'Rock',
      favorites: 65,
    },
    {
      id: 26,
      title: 'Shape of You',
      artist: ['Ed Sheeran'],
      genre: 'Pop',
      favorites: 89,
    },
    {
      id: 27,
      title: 'Wonderwall',
      artist: ['Oasis'],
      genre: 'Rock',
      favorites: 81,
    },
    {
      id: 28,
      title: 'Another Brick in the Wall',
      artist: ['Pink Floyd'],
      genre: 'Rock',
      favorites: 74,
    },
    {
      id: 29,
      title: 'Let It Be',
      artist: ['The Beatles'],
      genre: 'Pop',
      favorites: 97,
    },
    {
      id: 30,
      title: "Sweet Child o' Mine",
      artist: ["Guns N' Roses"],
      genre: 'Rock',
      favorites: 88,
    },
  ]

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
