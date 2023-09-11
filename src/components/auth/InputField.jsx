import { Controller } from 'react-hook-form'

export const InputField = ({ label, name, type, placeholder = label, control, rules }) => {
  return (
    <div className="mb-3">
      <label className="inline-block font-medium text-sm mb-1">{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <input
              className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black focus:ring-0 rounded"
              type={type}
              placeholder={placeholder}
              {...field}
            />
            {fieldState.error && <p className="text-red-600">{fieldState.error.message}</p>}
          </>
        )}
      />
    </div>
  )
}
