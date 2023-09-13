import { storage } from '@/firebase'
import { ref, uploadBytesResumable } from 'firebase/storage'
import { buildSongFileName } from '../../utils'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'

export const startUploadingSong = (file) => {
  // create a reference to the file in the storage bucket
  const songRef = buildSongFileName(file.name)
  const songsRef = ref(storage, `songs/${songRef}`)
  const task = uploadBytesResumable(songsRef, file)
  return task
}

export const setSong = async (song) => {
  const ref = await addDoc(collection(db, 'songs'), song)
}
