import { createAsyncThunk } from '@reduxjs/toolkit'
import { ManagaSongsActions } from './manageSongs.slice'
import { SongsService } from '../../services'
import { AlertActions, AlertVariants } from '../alert'
import { getFirebaseErrorMessage } from '../../firebase/errors'

export class ManageSongsThunk {
  static getSongs = createAsyncThunk('manage-songs/getSongs', async (payload, thunkAPI) => {
    // make request
    const response = await SongsService.getUserSongs()
    // ! handle unsuccessful response
    if (!response.success) {
      // console.log('response', response)
      const message = getFirebaseErrorMessage(response.error)
      // show error alert
      thunkAPI.dispatch(AlertActions.showAlert({ message, variant: AlertVariants.ERROR }))
      return
    }
    // * handle successful response
    // set songs
    thunkAPI.dispatch(ManagaSongsActions.setSongs(response.data))
  })
}
