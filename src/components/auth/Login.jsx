export const Login = () => {
   const handleInputChange = (event) => {
      // TODO: validate form
   }

   const onFormSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData(event.target)
      const data = Object.fromEntries(formData.entries())
      console.log(data)
   }

   return (
      <form onSubmit={onFormSubmit}>
         <div className="flex flex-col my-1">
            {/* email */}
            <div className="mb-3">
               <label className="inline-block mb-2">Email</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 rounded-md transition duration-500 focus:outline-none focus:border-black rounded"
                  name="email"
                  placeholder="Enter Email"
                  type="email"
                  onChange={handleInputChange}
               />
            </div>
            {/* password */}
            <div className="mb-3">
               <label className="inline-block  mb-2">Password</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 border py-1.5 px-3 rounded-md transition duration-500 focus:outline-none focus:border-black rounded"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={handleInputChange}
               />
            </div>
         </div>
         <div className="mt-2 text-center">
            <button className="mt-1 bg-purple-600 text-white p-2 rounded-md w-full" type="submit">
               Submit
            </button>
         </div>
      </form>
   )
}
