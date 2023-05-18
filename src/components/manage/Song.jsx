import React from 'react'

export const Song = () => {
   return (
      <li className="m-4 border-2 border-gray-100">
         <details className="m-2">
            <summary className="flex flex-row justify-between items-center cursor-pointer">
               <span className="text-2xl font-bold">Song Name</span>
               <div>
                  <i className="fa-solid fa-pencil bg-blue-600 text-white p-2 rounded m-1"></i>
                  <i className="fa-solid fa-xmark bg-red-600 text-white p-2 rounded m-1"></i>
               </div>
            </summary>
            <form>
               <div className="flex flex-col mt-1">
                  <div className="mb-3">
                     <label className="font-semibold inline-block mb-2">Song Title</label>
                     <input
                        type="text"
                        name="title"
                        placeholder="Enter Song Title"
                        className="block w-full border border-gray-300 text-gray-400 py-1.5 px-3 transition duration-500 placeholder-gray-400  font-semibold focus:outline-none focus:border-gray-800 focus:ring-0 rounded"
                     />
                  </div>
                  <div className="mb-3">
                     <label className="font-semibold inline-block mb-2">Genre</label>
                     <input
                        type="text"
                        name="genre"
                        placeholder="Enter Genre"
                        className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 placeholder-gray-400  font-semibold focus:outline-none focus:border-gray-800 focus:ring-0 rounded"
                     />
                  </div>
                  <div className="flex">
                     <button
                        className="bg-green-600 mx-1 py-2 px-3 text-white rounded transition hover:bg-blue-700 cursor-pointer"
                        type="submit"
                     >
                        Submit
                     </button>
                     <button
                        className="bg-gray-600 mx-1 py-2 px-3 text-white rounded transition hover:bg-blue-700 cursor-pointer"
                        type="submit"
                     >
                        Go Back
                     </button>
                  </div>
               </div>
            </form>
         </details>
      </li>
   )
}
