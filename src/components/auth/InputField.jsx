import { forwardRef } from "react"

export const InputField = forwardRef((props, ref) => {
   const { label, name, type, placeholder, rules, errors, register} = props
   return (
      <div className="mb-3">
         <label className="inline-block mb-2">{label}</label>
         <input
            className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black rounded"
            type={type}
            placeholder={placeholder}
            {...register(name, rules)}
         />
         {errors[name] && <p className="text-red-600">{errors[name].message}</p>}
      </div>
   )
})
