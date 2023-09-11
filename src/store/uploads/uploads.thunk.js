import { startUploadingSong } from './uploads.provider'
import { setUpload, uploadSong } from './uploads.slice'

const Variants = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
}

export const handleUploadSong = (files) => async (dispatch) => {
  files.forEach((file) => {
    const task = startUploadingSong(file)
    // create an object to track progress, and set the variant
    const item = {
      task,
      id: crypto.randomUUID(),
      progress: 0,
      name: file.name,
      variant: Variants.LOADING,
    }
    // push item to the store
    dispatch(uploadSong(item))
    // monitoring upload progress
    task.on(
      'state_changed',
      // track the progress
      (snapshot) => {
        // calculate the progress based on the bytes transferred
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // build the props to be updated
        const props = { id: item.id, progress }
        dispatch(setUpload(props))
      },
      // handle errors
      (error) => {
        const props = { id: item.id, variant: Variants.ERROR }
        dispatch(setUpload(props))
      },
      // handle success
      () => {
        const props = { id: item.id, variant: Variants.SUCCESS }
        dispatch(setUpload(props))
      },
    )
  })
}
