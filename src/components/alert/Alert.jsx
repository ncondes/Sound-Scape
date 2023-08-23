import { useState } from 'react'

const variants = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
}

export const Alert = ({ message, variant }) => {
  const [showAlert, setShowAlert] = useState(true)

  const handleClose = () => {
    setShowAlert(false)
  }

  return (
    <>
      {showAlert ? (
        <div className={`relative container block w-full text-white ${variants[variant] ?? ''}  font-semibold mb-3`}>
          <button className="cursor-pointer absolute right-0 px-1" onClick={handleClose}>
            <i className="fas fa-times green" />
          </button>
          <p className="text-center p-4">{message}</p>
        </div>
      ) : null}
    </>
  )
}
