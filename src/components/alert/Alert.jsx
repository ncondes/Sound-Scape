import { selectAlertMessage, selectAlertVariant, selectIsAlertOpen } from '@/store/alert/alert.selectors'
import { useDispatch, useSelector } from 'react-redux'
import { closeAlert } from '@/store/alert/alert.slice'
import { useRef } from 'react'

const Variants = {
  SUCCESS: { icon: 'fa-regular fa-circle-check', bg: 'bg-green-500', ibg: 'bg-green-700' },
  ERROR: { icon: 'fa-regular fa-circle-xmark', bg: 'bg-red-500', ibg: 'bg-red-700' },
  INFO: { icon: 'fa-solid fa-circle-info', bg: 'bg-blue-500', ibg: 'bg-blue-700' },
  WARNING: { icon: 'fa-solid fa-triangle-exclamation', bg: 'bg-yellow-500', ibg: 'bg-yellow-700' },
}

export const Alert = () => {
  // ref to the alert element
  const alertRef = useRef(null)
  const dispatch = useDispatch()
  // get the alert message, and variant from the store
  const message = useSelector(selectAlertMessage)
  const variant = useSelector(selectAlertVariant)
  const isOpen = useSelector(selectIsAlertOpen)
  // get the background, icon, and icon background based on the variant
  const bg = variant ? Variants[variant].bg : ''
  const ibg = variant ? Variants[variant].ibg : ''
  const icon = variant ? Variants[variant].icon : ''
  // close the alert by clicking on the close button
  const handleClose = () => {
    if (alertRef.current) {
      alertRef.current.classList.add('slide-out-animation')
      setTimeout(() => {
        dispatch(closeAlert())
      }, 300)
    }
  }

  if (!isOpen) return null

  return (
    <article
      ref={alertRef}
      aria-atomic="true"
      role="alert"
      className={`fixed z-50 bottom-10 left-10 flex items-center gap-x-3 w-96 min-h-fit pl-3 pr-6 py-4 rounded shadow ${bg} slide-in-animation`}
    >
      <div className={`${ibg} p-2 rounded-full`}>
        <i className={`${icon} fa-xl text-white`}></i>
      </div>
      <span className="text-white text-sm">{message}</span>
      <button
        aria-label="Close"
        className={`cursor-pointer absolute right-2 top-2 w-6 h-6 rounded-full hover:bg-neutral-500 hover:bg-opacity-30`}
        onClick={handleClose}
      >
        <i className="fas fa-times text-white" />
      </button>
    </article>
  )
}
