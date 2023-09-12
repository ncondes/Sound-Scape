import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'

export const getSongsByUser = async (uid) => {
  const songsCollectionRef = collection(db, 'songs')
  const q = query(songsCollectionRef, where('uid', '==', uid))
  const querySnapshot = await getDocs(q)

  const songs = []

  querySnapshot.forEach((doc) => {
    songs.push(doc.data())
  })

  return songs
}
