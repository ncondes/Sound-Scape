import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faRightToBracket, faSliders } from '@fortawesome/free-solid-svg-icons'
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
            <a href="#">
               <p className="text-white font-bold text-2xl">
                  SOUND <span className="font-normal text-xl text-amber-500">Scape</span>
               </p>
            </a>
            <div className="flex items-center">
               <ul className="flex flex-row mt-1">
                  {/* navigation links */}
                  <li>
                     <a href="#" className="px-3 text-white font-semibold">
                        <FontAwesomeIcon
                           className="mx-1"
                           icon={faSliders}
                           style={{ color: '#FFF' }}
                        />
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
                           <FontAwesomeIcon
                              className="mx-1"
                              icon={faRightFromBracket}
                              style={{ color: '#FFF' }}
                           />
                           Logout
                        </a>
                     </li>
                  ) : (
                     <li>
                        <a href="#" className="px-3 text-white font-semibold" onClick={handleOpen}>
                           <FontAwesomeIcon
                              className="mx-1"
                              icon={faRightToBracket}
                              style={{ color: '#FFF' }}
                           />
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
