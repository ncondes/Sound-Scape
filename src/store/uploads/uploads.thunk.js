import { uploadSong } from './uploads.slice'

import { startUpload } from './uploads.provider'

export const handleUploadSong = (setUploads, files) => {
  return async (dispatch) => {
    dispatch(uploadSong())
    startUpload(setUploads, files)

    // const allowedTypes = ['audio/mpeg', 'audio/mp3']
  }
}
