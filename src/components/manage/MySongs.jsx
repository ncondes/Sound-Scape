import React from 'react'
import { Song } from './Song'

export const MySongs = () => {
   return (
      <section
         style={{ height: 'fit-content', minHeight: '64px' }}
         className="w-[60%] mx-4 my-6 bg-white"
      >
         <div className="flex flex-row justify-between items-center p-6 border-b border-gray-200">
            <span className="font-bold">My Songs</span>
            <i className="fa-solid fa-compact-disc fa-xl text-lime"></i>
         </div>
         <ul>
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
         </ul>
      </section>
   )
}
