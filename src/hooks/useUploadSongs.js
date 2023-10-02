import { useState } from 'react'
import { SongsService } from '../services'
import { buildSongFileName } from '../utils'
import { useDispatch } from 'react-redux'
import { AlertActions, AlertVariants } from '../store/alert'
import { getFirebaseErrorMessage } from '../firebase/errors'

const Variants = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
}

export const useUploadSongs = () => {
  const [uploads, setUploads] = useState([])
  const dispatch = useDispatch()

  const handleUpload = (files) => {
    return new Promise((resolve) => {
      const onProgress = (id) => (progress) => {
        setUploads((uploads) => uploads.map((upload) => (upload.id === id ? { ...upload, progress } : upload)))
      }

      const onError = (id) => () => {
        setUploads((uploads) =>
          uploads.map((upload) => (upload.id === id ? { ...upload, variant: Variants.ERROR } : upload)),
        )
      }

      const onSuccess = (id) => () => {
        setUploads((uploads) =>
          uploads.map((upload) => (upload.id === id ? { ...upload, variant: Variants.SUCCESS } : upload)),
        )
        // remove the upload from the uploads array with a delay of 1 second
        setTimeout(() => {
          setUploads((uploads) => uploads.filter((upload) => upload.id !== id))
        }, 1000)

        resolve()
      }

      files.forEach(async (file) => {
        const name = buildSongFileName(file.name)
        // create an object to track progress, and set the variant
        const upload = {
          id: crypto.randomUUID().split('-')[0],
          name,
          progress: 0,
          variant: Variants.LOADING,
        }
        // push upload
        setUploads((uploads) => [upload, ...uploads])
        // make the upload request
        const response = await SongsService.uploadSong({
          file,
          onProgress: onProgress(upload.id),
          onError: onError(upload.id),
          onSuccess: onSuccess(upload.id),
        })
        // handle unsuccessful response
        if (!response.success) {
          // show alert
          const message = getFirebaseErrorMessage(response.error)
          dispatch(AlertActions.showAlert({ message, variant: AlertVariants.ERROR }))
        }
      })
    })
  }

  return { uploads, handleUpload }
}
