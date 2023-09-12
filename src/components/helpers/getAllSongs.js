import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

export const getAllSongs = async () => {
  const songsCollectionRef = collection(db, 'songs')
  const querySnapshot = await getDocs(songsCollectionRef)

  const songs = []

  querySnapshot.forEach((doc) => {
    songs.push(doc.data())
  })

  return songs
}
