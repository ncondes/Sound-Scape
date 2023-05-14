import { openModal } from '../../store/slices/modal'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../store/thunks/auth'

export const Header = () => {
   const dispatch = useDispatch()
   const { isUserLoggedIn } = useSelector((state) => state.auth)

   const handleOpen = () => {
      dispatch(openModal())
   }

   const handleLogOut = () => {
      dispatch(startLogout())
   }

   return (
      <header className="bg-gray-700">
         <nav className="container mx-auto flex justify-between items-center py-5 px-4">
            {/* app name */}
            <a href="/home">
               <p className="text-white font-bold text-2xl">
                  SOUND <span className="font-normal text-xl text-amber-500">Scape</span>
               </p>
            </a>
            <div className="flex items-center">
               <ul className="flex flex-row mt-1">
                  {/* navigation links */}
                  <li>
                     <a href="/manage" className="px-3 text-white font-semibold">
                        <i className="fa-solid fa-sliders mx-1 "></i>
                        Manage
                     </a>
                  </li>
                  {isUserLoggedIn ? (
                     <li>
                        <a
                           href="#"
                           className="px-3 text-white font-semibold"
                           onClick={handleLogOut}
                        >
                           <i className="fa-solid fa-right-from-bracket mx-1 "></i>
                           Logout
                        </a>
                     </li>
                  ) : (
                     <li>
                        <a href="#" className="px-3 text-white font-semibold" onClick={handleOpen}>
                           <i className="fa-solid fa-right-to-bracket mx-1 "></i>
                           Login / Register
                        </a>
                     </li>
                  )}
               </ul>
            </div>
         </nav>
      </header>
   )
}
