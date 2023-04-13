
export const Register = () => {
   const handleInputChange = ({ target }) => {
      // TODO: Validate form per type
      // console.log(target.value)
   }

   const onFormSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData(event.target)
      const data = Object.fromEntries(formData.entries())
      data.terms = event.target.terms.checked
      console.log(data)
   }

   return (
      <form onSubmit={onFormSubmit}>
         <div className="flex flex-col my-1">
            {/* name */}
            <div className="mb-3">
               <label className="inline-block mb-2">Name</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 rounded-md transition duration-500 focus:outline-none focus:border-black rounded"
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={handleInputChange}
               />
            </div>
            {/* email */}
            <div className="mb-3">
               <label className="inline-block mb-2">Email</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 rounded-md transition duration-500 focus:outline-none focus:border-black rounded"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleInputChange}
               />
            </div>
            {/* age */}
            <div className="mb-3">
               <label className="inline-block mb-2">Age</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 rounded-md transition duration-500 focus:outline-none focus:border-black rounded"
                  type="number"
                  placeholder=""
                  name="age"
                  onChange={handleInputChange}
               />
            </div>
            {/* password */}
            <div className="mb-3">
               <label className="inline-block mb-2">Password</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 rounded-md transition duration-500 focus:outline-none focus:border-black rounded"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
               />
            </div>
            {/* confirm password */}
            <div className="mb-3">
               <label className="inline-block mb-2">Confirm Password</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 rounded-md transition duration-500 focus:outline-none focus:border-black rounded"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm-password"
                  onChange={handleInputChange}
               />
            </div>
            {/* country */}
            <div className="mb-3">
               <label className="inline-block mb-2">Country</label>
               <select className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 rounded-md transition duration-500 focus:outline-none focus:border-black rounded">
                  <option value="USA">USA</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Russia">Russia</option>
               </select>
            </div>
            {/* terms */}
            <div className="mb-3 flex items-center">
               <input
                  className="rounded-sm border border-gray-500 transition duration-500 focus:ring-transparent"
                  type="checkbox"
                  name="terms"
                  onChange={handleInputChange}
               />
               <label className="inline-block ml-2">I accept Music's Terms of Service</label>
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
