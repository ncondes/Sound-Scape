import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faSliders } from '@fortawesome/free-solid-svg-icons'
export const Header = () => {
   return (
      <header className="bg-gray-700 flex items-center justify-between">
         <div className="mx-32 my-6 flex-row">
            <a href="#"className="text-lg text-white font-bold"> SOUND </a>
            <a href="#"className="text-amber-500 font-semibold"> Scape </a>
         </div>
         <div className="flex-row mx-32">
            <FontAwesomeIcon icon={faSliders} size="sm" style={{color: "#ffffff",}} />
            <a href="#"className="text-sm mr-2 text-white font-semibold"> Manage </a>
            <FontAwesomeIcon icon={faRightToBracket} size="sm" style={{color: "#ffffff",}} />
            <a href="#"className="text-sm mr-2 text-white font-semibold"> Login / Register </a>
         </div>
      </header>
   )
}
