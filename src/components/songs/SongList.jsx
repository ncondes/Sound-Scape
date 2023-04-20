import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SongItem } from "./SongItem"
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons"

export const SongList = () => {
  return (
     <section className="container my-10 mx-auto w-full bg-white border-t-2 border-gray-100">
        {/* table header */}
        <div className="font-bold text-lg flex justify-between items-center p-6 border-b-2 border-gray-100">
           <h1> Songs </h1>
           <FontAwesomeIcon icon={faHeadphonesAlt} style={{ color: '#77db89' }} />
        </div>
        {/* song list */}
        <ul>
           <SongItem />
           <SongItem />
           <SongItem />
           <SongItem />
           <SongItem />
           <SongItem />
        </ul>
     </section>
  )
}
