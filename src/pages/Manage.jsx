import { SongList } from '../components/manage/song-list/SongList'
import { InputField } from '../components/manage/InputField'
import { useDispatch } from 'react-redux'
import { UploadDialog } from '../components/manage/UploadDialog'
import { Button } from '../components/button/Button'
import { UploadSongsModalActions } from '../store/upload-songs-modal'

export const ManagePage = () => {
  const dispatch = useDispatch()

  const handleUploadSongs = () => {
    dispatch(UploadSongsModalActions.openModal())
  }

  return (
    <section className="relative">
      {/* background animation */}
      <div
        className="w-full bg-contain bg-center h-40 animation-bg"
        style={{ backgroundImage: "url('assets/img/manage-background.png')" }}
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
            <InputField type="text" placeholder="Search" />
            <Button variant="contained" className="py-1.5 px-6" onClick={handleUploadSongs}>
              <i className="fa-solid fa-plus mr-2"></i>
              Upload Songs
            </Button>
          </div>
        </section>
        {/* list */}
        <SongList />
      </div>
      {/* upload songs dialog */}
      <UploadDialog />
    </section>
  )
}
