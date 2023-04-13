import React, { useState } from 'react'

export const Login = () => {

   const handleInputChange = ( { target }) => {
      // TODO: Validate form per type  
      // console.log(target.value)
   }

   const onFormSubmit = ( event ) => {
      event.preventDefault(); 
      const formData = new FormData(event.target)
      const data = Object.fromEntries(formData.entries())
      console.log(data)
   }

   return (
      <form onSubmit={onFormSubmit}>
         <div className="flex flex-col my-1">
            <label className="font-medium mt-2 mb-1"> Email </label>
            <input
               className="my-1 border-gray-200 border-2 p-2 rounded-md placeholder:font-medium"
               type="email"
               placeholder="Enter Email"
               name='email'
               onChange={handleInputChange}
            ></input>
            <label className="font-medium mt-2 mb-1"> Password </label>
            <input
               className="my-1 border-gray-200 border-2 p-2 rounded-md placeholder:font-medium"
               type="password"
               placeholder="Password"
               name='password'
               onChange={handleInputChange}
            ></input>
         </div>
         <div className="submit mt-2 text-center">
            <button className="mt-1 bg-purple-600 text-white border-2 p-2 rounded-md font-medium w-full">
               Submit
            </button>
         </div>
      </form>
   )
}
