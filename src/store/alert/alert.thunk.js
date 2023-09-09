import { setAlert } from './alert.slice'

export const showAlert =
  ({ message, variant }) =>
  async (dispatch) => {
    // show alert
    dispatch(setAlert({ message, variant, isOpen: true }))
    // hide alert after 4 seconds
    setTimeout(() => {
      dispatch(setAlert({ message: '', variant: '', isOpen: false }))
    }, 4000)
  }
