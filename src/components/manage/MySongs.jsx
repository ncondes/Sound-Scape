import { MySong } from './MySong'

export const MySongs = () => {
   return (
      <section className="col-span-2">
         <div className="bg-white rounded border border-gray-200 flex flex-col">
            {/* header */}
            <div className="flex justify-between items-center px-6 pt-6 pb-5 border-b border-gray-200">
               <span className="font-bold">My Songs</span>
               <i className="fa-solid fa-compact-disc fa-xl text-lime"></i>
            </div>
            {/* content */}
            <ul className="p-6">
               <MySong />
               <MySong />
               <MySong />
               <MySong />
               <MySong />
            </ul>
         </div>
      </section>
   )
}
