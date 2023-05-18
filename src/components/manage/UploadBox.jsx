import React from 'react'
import { UploadingSong } from './UploadingSong'

export const UploadBox = () => {
   return (
      <section
         style={{ height: 'fit-content', minHeight: '64px' }}
         className="w-[35%] m-4 my-6 bg-white"
      >
         <div className="flex flex-row justify-between items-center p-6 border-b border-gray-200">
            <span className="font-bold">Upload</span>
            <i className="fa-sharp fa-solid fa-upload fa-xl text-lime"></i>
         </div>
         <div className="m-6 border-b border-gray-200">
            <div className="flex justify-center border-2 border-dashed border-gray-400 py-20 mb-6">
               <span className="text-gray-400 font-semibold "> Drop your files here </span>
            </div>
         </div>
         <div>
            <UploadingSong />
            <UploadingSong />
            <UploadingSong />
         </div>
      </section>
   )
}
