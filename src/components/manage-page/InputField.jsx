export const InputField = ({ value, onChange, ...attributes }) => {
  // TODO: custom class names, and make this component global ?

  return (
    <input
      className="block w-96 border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black focus:ring-0 rounded"
      value={value}
      onChange={onChange}
      {...attributes}
    />
  )
}
