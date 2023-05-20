import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Error404 = () => {
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      const image = new Image()
      image.onload = () => {
         setIsLoaded(true)
      }
      image.src = '../assets/img/Error404bg.jpg'
   }, [])

   const navigate = useNavigate()

   const handleGoHome = () => {
      navigate('/')
   }
   return (
      <>
         {isLoaded ? (
            <div
               className="flex flex-grow flex-col justify-center items-center bg-cover bg-no-repeat"
               style={{ backgroundImage: 'url(../assets/img/Error404bg.jpg)' }}
            >
               <div className="flex justify-centers items-center">
                  <span className="text-[300px] text-amber-500">4</span>
                  <img
                     src="../assets/img/brokenrecord.png"
                     alt="0"
                     style={{ width: 300, height: 300 }}
                  />
                  <span className="text-[300px] text-amber-500">4</span>
               </div>
               <p className="text-6xl">Sorry, song not found!</p>
               <button
                  className={
                     'mt-10 bg-black text-white py-2 px-8 rounded transition hover:bg-amber-500'
                  }
                  onClick={handleGoHome}
               >
                  Go Home
               </button>
            </div>
         ) : null}
      </>
   )
}
