import { storage } from '@/firebase'
import { ref, uploadBytesResumable } from 'firebase/storage'

export const startUploadingSong = (file) => {
  // create a reference to the file in the storage bucket
  const songsRef = ref(storage, `songs/${file.name}`)
  const task = uploadBytesResumable(songsRef, file)
  return task
}
