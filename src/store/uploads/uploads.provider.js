import { storage } from '@/firebase'
import { ref, uploadBytesResumable } from 'firebase/storage'

const variants = {
  sucess: 'success',
  error: 'error',
  loading: 'loading',
}

export const startUpload = (setUploads, files) => {
  files.forEach((file, currentIndex) => {
    // TODO: show error message if file type is not allowed

    const songsRef = ref(storage, `songs/${file.name}`)
    const task = uploadBytesResumable(songsRef, file)

    const newUpload = {
      task,
      currentProgress: 0,
      name: file.name,
      variant: variants.loading,
      icon: 'fas fa-spinner fa-spin',
    }

    setUploads((prev) => [newUpload, ...prev])

    task.on(
      'state_changed',
      (snapshot) => {
        console.log(snapshot)
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

        // Update progress in the state for the current upload
        setUploads((prevUploads) => {
          const updatedUploads = [...prevUploads]
          updatedUploads[currentIndex].currentProgress = progress
          return updatedUploads
        })
      },
      (error) => {
        // Handle unsuccessful uploads

        // Update variant and icon for failure
        setUploads((prevUploads) => {
          const updatedUploads = [...prevUploads]
          updatedUploads[currentIndex].variant = variants.error
          updatedUploads[currentIndex].icon = 'fas fa-times'
          return updatedUploads
        })
      },
      () => {
        // Handle successful uploads on complete

        // Update variant and icon for success
        setUploads((prevUploads) => {
          const updatedUploads = [...prevUploads]
          updatedUploads[currentIndex].variant = variants.sucess
          updatedUploads[currentIndex].icon = 'fas fa-check'
          return updatedUploads
        })
      },
    )
  })
}
