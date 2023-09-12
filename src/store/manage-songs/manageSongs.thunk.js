import { auth } from '../../firebase'
import { getSongsByUser } from './manageSongs.provider'
import { setSongs } from './manageSongs.slice'

export const handleGetSongs = () => async (dispatch) => {
  const user = auth.currentUser
  getSongsByUser(user.uid).then((result) => {
    dispatch(setSongs(result))
  })
}
