import { SongItem } from '../song'

export const SongList = () => {
   return (
      <section className="container mx-auto">
         <div className="bg-white rounded border border-gray-200 flex flex-col">
            {/* header */}
            <div className="font-bold text-xl flex justify-between items-center p-6 border-b border-gray-200">
               <span>Songs</span>
               <i className="fa-solid fa-headphones-alt text-lime"></i>
            </div>
            {/* list */}
            <ul>
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
