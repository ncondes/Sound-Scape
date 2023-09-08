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
  const textColor = textVariants[variant] ?? ''
  const bgColor = bgVariants[variant] ?? ''

  return (
    <div className="mb-4">
      <i className={`${icon} fa-l ${textColor} `} />
      <span className={`font-bold text-sm ml-2 ${textColor}`}>{name}</span>
      <div className="flex rounded overflow-hidden bg-gray-200 h-4">
        <div className={`transition-all progress-bar ${bgColor}`} style={{ width: `${currentProgress}%` }} />
      </div>
    </div>
  )
}
