import { uploadSong } from './uploads.provider'
import { setUpload, upload } from './uploads.slice'

const Variants = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
}

const Icons = {
  SUCCESS: 'fas fa-check',
  ERROR: 'fas fa-times',
  LOADING: 'fas fa-spinner fa-spin',
}

const Texts = {
  SUCCESS: 'text-green-400',
  ERROR: 'text-red-400',
  LOADING: 'text-blue-400',
}

export const handleUploadSong = (files) => async (dispatch) => {
  files.forEach((file) => {
    const task = uploadSong(file)
    const item = {
      id: crypto.randomUUID(),
      task,
      progress: 0,
      name: file.name,
      variant: Variants.LOADING,
      icon: Icons.LOADING,
      text: Texts.LOADING,
    }

    // push item to slice
    dispatch(upload(item))

    // Monitoring upload progress
    task.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        const props = { id: item.id, progress }
        dispatch(setUpload(props))
      },
      (error) => {
        const props = {
          id: item.id,
          variant: Variants.ERROR,
          icon: Icons.ERROR,
          text: Texts.ERROR,
        }
        dispatch(setUpload(props))
      },
      () => {
        const props = {
          id: item.id,
          variant: Variants.SUCCESS,
          icon: Icons.SUCCESS,
          text: Texts.SUCCESS,
        }
        dispatch(setUpload(props))
      },
    )
  })
}
