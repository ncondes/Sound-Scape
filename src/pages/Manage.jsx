import { SongList } from '../components/manage/song-list/SongList'
import { InputField } from '../components/manage/InputField'
import { openModal } from '../store/upload-modal/uploadModal.slice'
import { useDispatch } from 'react-redux'
import { UploadDialog } from '../components/manage/UploadDialog'

export const ManagePage = () => {
  const dispatch = useDispatch()

  const handleUploadSongs = () => {
    dispatch(openModal())
  }

  return (
    <section className="relative">
      {/* // TODO: rename introduction-bg class to background-image-animation or something similar */}
      {/* background animation */}
      <div
        className="w-full bg-contain bg-center h-40 introduction-bg"
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
          {/* // TODO: create a reusable button component with the styles */}
          <div className="flex gap-5">
            <InputField type="text" placeholder="Search" />
            <button
              className="rounded text-white py-1.5 px-6 bg-gradient-to-r from-violet-500 to-indigo-400 hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-500"
              onClick={handleUploadSongs}
            >
              <i className="fa-solid fa-plus mr-2"></i>
              Upload Songs
            </button>
          </div>
        </section>

        <SongList />
      </div>
      {/* upload songs dialog */}
      <UploadDialog />
    </section>
  )
}
