const textVariants = {
  success: 'text-green-400',
  error: 'text-red-400',
  loading: 'text-blue-400',
}

const bgVariants = {
  success: 'bg-green-400',
  error: 'bg-red-400',
  loading: 'bg-blue-400',
}

export const UploadingSong = ({ upload }) => {
  const { name, currentProgress, variant, icon } = upload

  return (
    <div className="mb-4">
      <i className={`${icon} fa-l ${textVariants[variant] ?? ''} `} />
      <label className="font-bold text-sm"> {name} </label>
      <div className="flex rounded overflow-hidden bg-gray-200 h-4">
        <div
          className={`transition-all progress-bar ${bgVariants[variant] ?? ''}`}
          style={{ width: `${currentProgress}%` }}
        />
      </div>
    </div>
  )
}
