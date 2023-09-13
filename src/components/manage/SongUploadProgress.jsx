const Variants = {
  SUCCESS: {
    icon: 'fas fa-check',
    text: 'text-green-700',
    bg: 'bg-green-500',
  },
  ERROR: {
    icon: 'fas fa-times',
    text: 'text-red-700',
    bg: 'bg-red-500',
  },
  LOADING: {
    icon: 'fas fa-spinner fa-spin',
    text: 'text-blue-700',
    bg: 'bg-blue-500',
  },
}

export const SongUploadProgress = ({ name, progress, variant }) => {
  const icon = Variants[variant]?.icon ?? ''
  const text = Variants[variant]?.text ?? ''
  const bg = Variants[variant]?.bg ?? ''

  return (
    <div className="w-full">
      {/* icon and  */}
      <div className="flex items-center">
        <i className={`${icon} ${text}`} />
        <p className={`inline-block font-semibold text-sm ml-2 truncate ... ${text}`}>{name}</p>
      </div>
      <div className="flex rounded-sm overflow-hidden bg-gray-200 h-3">
        <div className={`transition-all progress-bar ${bg}`} style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
