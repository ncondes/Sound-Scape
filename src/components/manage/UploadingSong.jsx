import React from 'react'

export const UploadingSong = () => {
   return (
      //   <div className="mx-6 my-4">
      //      <span className="font-bold">Just another song.mp3</span>
      //      <div className="bg-gray-200 p-2 rounded-md "> </div>
      //   </div>

      <div className="flex flex-col mx-6 my-4">
         <label className="font-bold">Just another song.mp3</label>
         <progress className="rounded-full overflow-hidden w-full" value="60" max="100"></progress>
      </div>
   )
}
