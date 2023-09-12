import { useEffect } from 'react'
import { useClickOutside } from '../../hooks'
import { createPortal } from 'react-dom'

export const Dialog = ({ open, onClose, children, ...attributes }) => {
  const modalRef = useClickOutside(() => onClose())

  const buildClassName = () => {
    /**
     * # default classes
     * - z-40: ensure modal is on top of everything except the alert
     * - min-h-fit: ensure modal is at least as tall as its content
     * - min-w-fit: ensure modal is at least as wide as its content
     * - overflow-hidden: hide any content that overflows the modal
     * - relative: ensure modal is positioned relative to its parent
     * - ...
     */
    let result = 'z-40 min-h-fit min-w-fit bg-white rounded shadow overflow-hidden relative'
    // add any custom classes
    if (attributes.className) result += ` ${attributes.className}`
    return result
  }
  // disable scrolling when modal is open
  useEffect(() => {
    open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
  }, [open])

  if (!open) return

  return createPortal(
    <>
      {/* overlay container */}
      <div className="fixed inset-0 transition-opacity z-40 p-10 flex items-center justify-center">
        {/* overlary bg */}
        <div className="absolute inset-0 bg-gray-800 opacity-75" />
        {/* modal container */}
        <div ref={modalRef} {...attributes} className={buildClassName()}>
          {/* modal */}
          {children}
        </div>
      </div>
    </>,
    document.body,
  )
}
