import { faComments, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SongItem = () => {
   return (
      <li className="text-gray-600 container mx-auto flex justify-between items-center p-3 pl-6 transition duration-300 hover:bg-gray-50">
         {/* song info */}
         <div>
            <a href="#" className="font-bold block text-gray-600 cursor-pointer">
               Song Title
            </a>
            <span className="text-gray-500 text-sm">Artist Name</span>
         </div>
         {/* likes and comments */}
         <div className="flex gap-5 text-gray text-lg">
            <div>
               <FontAwesomeIcon icon={faHeart} />
               <span className="ml-1">10</span>
            </div>
            <div>
               <FontAwesomeIcon icon={faComments} />
               <span className="ml-1">5</span>
            </div>
         </div>
      </li>
   )
}
