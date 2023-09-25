import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore'
import { auth, db, storage } from '../firebase'
import { buildSongFileName } from '../utils'
import { ref, uploadBytesResumable } from 'firebase/storage'

export class SongsService {
  static async getSongs() {
    try {
      // create a reference to the songs collection
      const songsRef = collection(db, 'songs')
      // build the query
      const q = query(songsRef)
      // execute the query
      const snapshot = await getDocs(q)
      // map the snapshot to an array of songs
      const songs = snapshot.docs.map((doc) => doc.data())

      return { success: true, data: songs, error: null }
    } catch (error) {
      return { success: false, data: [], error: error.message }
    }
  }

  static async getSong(id) {
    try {
      // create a reference to the songs collection
      const songsRef = doc(db, 'songs', id)
      // build the query
      // execute the query
      const snapshot = await getDoc(songsRef)
      // build the song object
      const song = { ...snapshot.data() }

      return { success: true, data: song, error: null }
    } catch (error) {
      return { success: false, data: null, error: error.message }
    }
  }

  static async getUserSongs() {
    try {
      // create a reference to the songs collection
      const songsRef = collection(db, 'songs')
      // build the query
      const q = query(songsRef, orderBy('created', 'desc'), where('uid', '==', auth.currentUser.uid))
      // execute the query
      const snapshot = await getDocs(q)
      // map the snapshot to an array of songs with the id
      const songs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

      return { success: true, data: songs, error: null }
    } catch (error) {
      return { success: false, data: [], error: error.message }
    }
  }

  static async uploadSong({ file, onProgress, onError, onSuccess }) {
    try {
      // build the song file name
      const title = buildSongFileName(file.name)
      // create a song object
      const song = {
        title,
        uid: auth.currentUser.uid,
        genre: '',
        artist: [],
        favorites: 0,
        created: serverTimestamp(),
      }
      // create a reference to the songs collection
      const songsRef = collection(db, 'songs')
      // add the song to the songs collection
      const docRef = await addDoc(songsRef, song)
      // create a reference to the song file in the storage bucket
      const songRef = ref(storage, `songs/${docRef.id}`)
      // upload the song file
      const task = uploadBytesResumable(songRef, file)
      // monitor the upload progress
      task.on(
        'state_changed',
        // track the progress
        (snapshot) => {
          // calculate the progress based on the bytes transferred
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // call the onProgress callback
          onProgress(progress)
        },
        // handle errors
        async (error) => {
          // call the onError callback
          onError(error)
          // remove the song from the database
          await deleteDoc(docRef)

          return { success: false, data: null, error: error.message }
        },
        // handle success
        () => {
          // call the onSuccess callback
          onSuccess()

          return { success: true, data: null, error: null }
        },
      )

      return { success: true, data: null, error: null }
    } catch (error) {
      return { success: false, data: null, error: error.message }
    }
  }
}
