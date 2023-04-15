import { useForm } from 'react-hook-form'


export const Register = () => {

   const { register, handleSubmit, formState: { errors } } = useForm();
   const handleInputChange = (event) => {
      // TODO: validate form
   }
     const validatePassword = (value) => {
        if (value === 'password') {
           return "Password cannot be 'password'"
        }
     }
    const validateConfirmPassword = (value, values) => {
       if (value !== values.password) {
          return 'Passwords do not match'
       }
    }
    const validateCountry = (value) => {
       if (value === 'Argentina') {
          return 'We currently do not support Argentina'
       }
    }
   const onSubmit = (data) => {
   //    event.preventDefault()
   //    const formData = new FormData(event.target)
   //    const data = Object.fromEntries(formData.entries())
   //    data.terms = event.target.terms.checked
      console.log(data)
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="flex flex-col my-1">
            {/* name */}
            <div className="mb-3">
               <label className="inline-block mb-2">Name</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black rounded"
                  type="text"
                  placeholder="Enter Name"
                  {...register('name', {
                     required: 'Name is required',
                     maxLength: { value: 20, message: 'Name cannot exceed 20 characters' },
                     minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                  onChange={handleInputChange}
               />
               {errors.name && <p className="text-red-600">{errors.name.message}</p>}
            </div>
            {/* email */}
            <div className="mb-3">
               <label className="inline-block mb-2">Email</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black rounded"
                  type="email"
                  placeholder="Enter Email"
                  {...register('email', {
                     required: 'Email is required',
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                     }
                  })}
                  onChange={handleInputChange}
               />
               {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>
            {/* age */}
            <div className="mb-3">
               <label className="inline-block mb-2">Age</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black rounded"
                  type="number"
                  placeholder="Age"
                  {...register('age', {
                     required: 'Age is required',
                     min: { value: 18, message: 'You must be at least 18 years old' },
                     max: { value: 85, message: 'You cannot be older than 85 years old' }
                  })}
                  onChange={handleInputChange}
               />
               {errors.age && <p className="text-red-600">{errors.age.message}</p>}
            </div>
            {/* password */}
            <div className="mb-3">
               <label className="inline-block mb-2">Password</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black rounded"
                  type="password"
                  placeholder="Password"
                  {...register('password', {
                     required: 'Password is required',
                     minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                     },
                     maxLength: {
                        value: 30,
                        message: 'Password cannot be more than 30 characters'
                     },
                     validate: validatePassword
                  })}
                  onChange={handleInputChange}
               />
               {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            </div>
            {/* confirm password */}
            <div className="mb-3">
               <label className="inline-block mb-2">Confirm Password</label>
               <input
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black rounded"
                  type="password"
                  placeholder="Confirm Password"
                  {...register('confirmPassword', {
                     required: 'Confirm Password is required',
                     minLength: {
                        value: 6,
                        message: 'Confirm Password must be at least 6 characters'
                     },
                     maxLength: {
                        value: 30,
                        message: 'Confirm Password cannot be more than 30 characters'
                     },
                     validate: { value: validateConfirmPassword }
                  })}
                  onChange={handleInputChange}
               />
               {errors.confirmPassword && (
                  <p className="text-red-600">{errors.confirmPassword.message}</p>
               )}
            </div>
            {/* country */}
            <div className="mb-3">
               <label className="inline-block mb-2">Country</label>
               <select
                  {...register('country', {
                     required: 'Country is required',
                     validate: validateCountry
                  })}
                  className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black rounded"
               >
                  <option value="USA">USA</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Russia">Russia</option>
                  <option value="Argentina">Argentina</option>
               </select>
               {errors.country && <p className="text-red-600">{errors.country.message}</p>}
            </div>
            {/* terms */}
            <div className="mb-3 flex items-center">
               <input
                  className="rounded border border-gray-500 focus:ring-transparent"
                  type="checkbox"
                  {...register('termsOfService', {
                     required: 'You must accept the Terms of Service'
                  })}
                  onChange={handleInputChange}
               />
               <label className="inline-block ml-2">I accept Music's Terms of Service</label>
            </div>
            {errors.termsOfService && (
               <p className="text-red-600">{errors.termsOfService.message}</p>
            )}
         </div>
         <button
            className="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700 cursor-pointer"
            type="submit"
         >
            Submit
         </button>
      </form>
   )
}
