import { SongItem } from './SongItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons'

export const SongList = () => {
   return (
      <section className="container mx-auto">
         <div className="bg-white rounded border border-gray-200 flex flex-col">
            {/* header */}
            <div className="font-bold text-xl flex justify-between items-center p-6 border-b border-gray-200">
               <span>Songs</span>
               <FontAwesomeIcon icon={faHeadphonesAlt} style={{ color: '#77db89' }} />
            </div>
            {/* list */}
            <ul>
               <SongItem />
               <SongItem />
               <SongItem />
               <SongItem />
               <SongItem />
               <SongItem />
               <SongItem />
               <SongItem />
            </ul>
         </div>
      </section>
   )
}
