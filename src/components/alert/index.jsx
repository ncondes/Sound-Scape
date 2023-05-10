import { useState } from 'react'

const variants = {
   success: 'bg-green-500',
   error: 'bg-red-500',
   info: 'bg-blue-500'
}

export const Alert = ({ message, variant }) => {
   const [showAlert, setShowAlert] = useState(true)

   const handleClose = () => {
      setShowAlert(false)
   }

   return (
      <>
         {showAlert ? (
            <div
               className={`relative container block w-full text-white ${
                  variants[variant] ?? ''
               }  font-semibold mb-3`}
            >
               <div className="modal-close cursor-pointer absolute right-0 px-1">
                  <i className="fas fa-times green" onClick={handleClose}></i>
               </div>
               <p className="text-center p-4">{message}</p>
            </div>
         ) : null}
      </>
   )
}
