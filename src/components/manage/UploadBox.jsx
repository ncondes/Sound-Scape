import { UploadingSong } from './UploadingSong'
import { handleUploadSong } from '../../store/uploads/uploads.thunk'
import { useDispatch, useSelector } from 'react-redux'
import { selectUploads } from '../../store/uploads/uploads.selectors'

export const UploadBox = () => {
  const uploads = useSelector(selectUploads)
  const dispatch = useDispatch()

  const handleUpload = (event) => {
    const files = [...event.target.files]
    dispatch(handleUploadSong(files))
  }

  return (
    <section className="col-span-1">
      <div className="bg-white rounded border border-gray-200 flex flex-col">
        {/* header */}
        <div className="flex justify-between items-center px-6 pt-6 pb-5 border-b border-gray-200">
          <span className="font-bold">Upload</span>
          <i className="fa-sharp fa-solid fa-upload fa-xl text-lime" />
        </div>
        {/* content */}
        <div className="p-6">
          {/* upload dropbox */}
          <div className="w-full px-10 py-20 mb-6 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid">
            <span>Drop your files here</span>
          </div>
          <input className="w-full" type="file" multiple accept="audio/mpeg, audio/mp3" onChange={handleUpload} />
          <hr className="my-6" />
          {/* progress bars */}
          {uploads.map((upload) => (
            <UploadingSong key={upload.name} upload={upload} />
          ))}
        </div>
      </div>
    </section>
  )
}
