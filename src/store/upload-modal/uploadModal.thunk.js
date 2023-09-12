import { clearUploads } from '../uploads/uploads.slice'
import { closeModal } from './uploadModal.slice'

export const closeUploadModal = () => (dispatch) => {
  dispatch(closeModal())
  dispatch(clearUploads())
}
