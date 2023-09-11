import { storage } from '@/firebase'
import { ref, uploadBytesResumable } from 'firebase/storage'
import { buildSongRef } from '../../utils'

export const startUploadingSong = (file) => {
  // create a reference to the file in the storage bucket
  const songRef = buildSongRef(file.name)
  const songsRef = ref(storage, `songs/${songRef}`)
  const task = uploadBytesResumable(songsRef, file)
  return task
}
