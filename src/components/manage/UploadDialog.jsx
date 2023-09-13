import { useDispatch, useSelector } from 'react-redux'
import { Dialog } from '../dialog/Dialog'
import { selectUploads } from '../../store/uploads/uploads.selectors'
import { handleUploadSong } from '../../store/uploads/uploads.thunk'
import { useRef } from 'react'
import { SongUploadProgress } from './SongUploadProgress'
import classes from '../../styles/manage.module.css'
import { UploadSongsModalActions, UploadSongsModalSelectors } from '../../store/upload-songs-modal'

export const UploadDialog = () => {
  const dispatch = useDispatch()

  const uploads = useSelector(selectUploads)
  const open = useSelector(UploadSongsModalSelectors.selectIsUploadModalOpen)

  const inputRef = useRef(null)
  const wrapperRef = useRef(null)

  const handleClose = () => {
    dispatch(UploadSongsModalActions.closeModal())
  }

  const handleUpload = (event) => {
    const files = [...event.target.files]
    dispatch(handleUploadSong(files))
  }

  const handleUploadButtonClick = () => {
    inputRef.current.click()
  }

  // style drop zone wrapper according to the events
  const onDragEnter = () => {
    wrapperRef?.current?.classList.add(classes['dragover'])
  }

  const onDragLeave = () => {
    wrapperRef?.current?.classList.remove(classes['dragover'])
  }

  const onDrop = () => {
    wrapperRef?.current?.classList.remove(classes['dragover'])
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="w-96 p-8 relative">
        {/* modal close button */}
        <button
          aria-label="Close"
          className={`cursor-pointer absolute right-2 top-2 w-6 h-6 rounded-full hover:bg-neutral-500 hover:bg-opacity-30`}
          onClick={handleClose}
        >
          <i className="fas fa-times" />
        </button>
        {/* title */}
        <h1 className="text-center text-2xl font-bold mb-4">Upload Songs</h1>
        {/* upload dropbox */}
        <div
          ref={wrapperRef}
          className={`relative flex flex-col justify-center items-center gap-6 w-full px-10 py-20 mb-6 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition`}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <i className="block fa-solid fa-file-arrow-up fa-2xl"></i>
          <p>Drop your files here or click in the button down below</p>
          <input
            ref={inputRef}
            className="opacity-0 absolute inset-0 cursor-pointer"
            type="file"
            multiple
            accept="audio/mpeg, audio/mp3"
            onChange={handleUpload}
          />
        </div>
        {/* file input */}
        {/* upload button */}
        <button
          className={`w-full cursor-pointer bg-gradient-to-r from-violet-500 to-indigo-400 text-white py-1.5 px-3 rounded transition hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-500`}
          onClick={handleUploadButtonClick}
        >
          <i className="fa-solid fa-upload"></i> Upload
        </button>
        {/* divider */}
        <hr className="my-6" />
        {/* progress bars */}
        <div className="flex flex-col gap-3 max-h-[228px] overflow-auto">
          {uploads.map((upload) => (
            <SongUploadProgress
              key={upload.id}
              name={upload.name}
              progress={upload.progress}
              variant={upload.variant}
            />
          ))}
        </div>
      </div>
    </Dialog>
  )
}
