import { SongList } from '../components/manage-page/SongList'
import { InputField } from '../components/manage-page/InputField'
import { useDispatch, useSelector } from 'react-redux'
import { UploadDialog } from '../components/manage-page/UploadDialog'
import { Button } from '../components/button/Button'
import { UploadSongsModalActions } from '../store/upload-songs-modal'
import { ManageSongsSelectors, ManageSongsThunk } from '../store/manage-songs'
import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

export const ManagePage = () => {
  const dispatch = useDispatch()
  const songs = useSelector(ManageSongsSelectors.selectSongs)
  const [searchParams, setSearchParams] = useSearchParams({ q: '' })
  const q = searchParams.get('q')

  const handleUploadSongs = () => {
    dispatch(UploadSongsModalActions.openModal())
  }

  const handleSearch = (event) => {
    setSearchParams(
      (params) => {
        params.set('q', event.target.value)
        return params
      },
      {
        replace: true, // replace the current entry in the history stack
      },
    )
  }

  const filteredSongs = useMemo(() =>
    songs.filter(
      (song) =>
        // filter by title, genre, and artist
        song.title.toLowerCase().includes(q.toString().toLowerCase()) ||
        song.genre.toLowerCase().includes(q.toString().toLowerCase()) ||
        song.artist.some((artist) => artist.toLowerCase().includes(q.toString().toLowerCase())),
      [songs, q],
    ),
  )

  useEffect(() => {
    dispatch(ManageSongsThunk.getSongs())
  }, [])

  return (
    <section className="relative">
      {/* background animation */}
      <div
        className="w-full bg-contain bg-center h-40 animation-bg"
        style={{ backgroundImage: "url('/assets/img/manage-background.png')" }}
      />
      {/* body */}
      <div className="relative container mx-auto my-20">
        {/* music icon */}
        <div className="absolute top-[-150px] left-0">
          <div className="flex items-center justify-center rounded-full w-32 h-32 bg-gradient-to-r from-violet-500 to-indigo-400">
            <i className="fa-solid fa-music text-[70px] text-white mr-2"></i>
          </div>
        </div>
        {/* body header */}
        <section className="flex justify-between mb-10">
          <h2 className="text-3xl font-semibold">Songs</h2>
          <div className="flex gap-5">
            <InputField type="text" placeholder="Search..." value={q} onChange={handleSearch} />
            <Button variant="contained" className="py-1.5 px-6" onClick={handleUploadSongs}>
              <i className="fa-solid fa-plus mr-2"></i>
              Upload Songs
            </Button>
          </div>
        </section>
        {/* list */}
        <SongList songs={filteredSongs} />
      </div>
      {/* upload songs dialog */}
      <UploadDialog />
    </section>
  )
}
