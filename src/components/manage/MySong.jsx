export const MySong = () => {
   return (
      <li className="border border-gray-200 p-3 mb-4 rounded">
         <details>
            {/* song header */}
            <summary className="flex flex-row justify-between items-center cursor-pointer">
               <h4 className="text-xl font-bold">Song Name</h4>
               <div>
                  <button className="bg-blue-600 text-white text-sm ml-1 py-1 px-2 rounded">
                     <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button className="bg-red-600 text-white text-sm ml-1 py-1 px-2 rounded">
                     <i className="fa-solid fa-xmark"></i>
                  </button>
               </div>
            </summary>
            {/* song form body */}
            <form>
               <div className="mb-3">
                  <label className="inline-block mb-2">Title</label>
                  <input
                     type="text"
                     name="title"
                     placeholder="Enter Song Title"
                     className="block w-full border border-gray-300 text-gray-400 py-1.5 px-3 transition duration-500 placeholder-gray-400   focus:outline-none focus:border-gray-800 focus:ring-0 rounded"
                  />
               </div>
               <div className="mb-3">
                  <label className="inline-block mb-2">Genre</label>
                  <input
                     type="text"
                     name="genre"
                     placeholder="Enter Genre"
                     className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 placeholder-gray-400   focus:outline-none focus:border-gray-800 focus:ring-0 rounded"
                  />
               </div>
               <button
                  className="bg-green-600 py-1.5 px-3 text-white rounded transition hover:bg-green-700"
                  type="submit"
               >
                  Submit
               </button>
               <button
                  className="bg-gray-600 py-1.5 px-3 text-white rounded transition hover:bg-gray-700"
                  type="button"
               >
                  Go Back
               </button>
            </form>
         </details>
      </li>
   )
}
