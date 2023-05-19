import { UploadingSong } from './UploadingSong'

export const UploadBox = () => {
   return (
      <section className="col-span-1">
         <div className="bg-white rounded border border-gray-200 flex flex-col">
            {/* header */}
            <div className="flex justify-between items-center px-6 pt-6 pb-5 border-b border-gray-200">
               <span className="font-bold">Upload</span>
               <i className="fa-sharp fa-solid fa-upload fa-xl text-lime"></i>
            </div>
            {/* content */}
            <div className="p-6">
               {/* upload dropbox */}
               <div className="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid">
                  <span>Drop your files here</span>
               </div>
               <hr className="my-6" />
               {/* progress bars */}
               <UploadingSong progress={75} />
               <UploadingSong progress={35} />
               <UploadingSong progress={55} />
            </div>
         </div>
      </section>
   )
}
