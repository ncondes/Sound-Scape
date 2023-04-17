import { useForm } from 'react-hook-form'
import { InputField } from './InputField'

export const Login = () => {

   const { register, handleSubmit, formState: { errors }} = useForm()

   const onSubmit = (data) => {
      console.log(data)
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="flex flex-col my-1">
            {/* email */}
            <InputField
               label="Email"
               name="email"
               type="email"
               placeholder="Enter Email"
               rules={{
                  required: 'Email is required',
                  pattern: {
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                     message: 'Invalid email address'
                  }
               }}
               register={register}
               errors={errors}
               />
            {/* password */}
            <InputField
               label="Password"
               name="password"
               type="password"
               placeholder="Password"
               rules={{
                  required: 'Password is required',
                  minLength: {
                     value: 6,
                     message: 'Password must be at least 6 characters'
                  },
                  maxLength: {
                     value: 30,
                     message: 'Password cannot be more than 30 characters'
                  },
               }}
               register={register}
               errors={errors}
            />
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
