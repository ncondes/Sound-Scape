import { useCallback, useEffect, useRef } from 'react'

export const useClickOutside = (callback) => {
  // create a ref to store the element
  const ref = useRef(null)

  const handleClickOutside = useCallback(
    (event) => {
      // check if the element exists and if it contains the target of the event
      if (ref.current && !ref.current.contains(event.target)) {
        // if it does, execute the callback
        callback()
      }
    },
    [ref],
  )

  useEffect(() => {
    // add the event listener
    document.addEventListener('mousedown', handleClickOutside)
    // remove the event listener on cleanup
    return () => document.removeEventListener('mousedown', handleClickOutside)
  })
  // return the ref so we can use it on the element we want to detect the click outside of
  return ref
}
