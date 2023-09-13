import { createAsyncThunk } from '@reduxjs/toolkit'
import { AlertActions } from './alert.slice'

export class AlertThunk {
  static showAlert = createAsyncThunk('alert/showAlert', async (payload, thunkAPI) => {
    // set the alert
    thunkAPI.dispatch(AlertActions.setAlert(payload))
    // add a delay of 5 seconds
    // await new Promise((resolve) =>
    //   setTimeout(() => {
    //     // close the alert
    //     thunkAPI.dispatch(AlertActions.closeAlert())
    //     resolve()
    //   }, 5000),
    // )
  })
}
