import { useForm } from 'react-hook-form'

export const Login = () => {

   const { register, handleSubmit, formState: { errors }} = useForm()

   const onSubmit = (data) => {
      console.log(data)
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="flex flex-col my-1">
            {/* email */}
            <div className="mb-3">
               <label className="inline-block mb-2">Email</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black rounded"
                  {...register('email', {
                     required: 'Email is required',
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                     }
                  })}
                  placeholder="Enter Email"
                  type="email"
               />
               {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>
            {/* password */}
            <div className="mb-3">
               <label className="inline-block  mb-2">Password</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 border py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black rounded"
                  {...register('password', {
                     required: 'Password is required',
                     minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                     },
                     maxLength: {
                        value: 30,
                        message: 'Password cannot be more than 30 characters'
                     }
                  })}
                  placeholder="Password"
                  type="password"
               />
               {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            </div>
         </div>
         <div className="mt-2 text-center">
            <button
               className="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700 cursor-pointer"
               type="submit"
            >
               Submit
            </button>
         </div>
      </form>
   )
}
