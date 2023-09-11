const Variants = {
  SUCCESS: {
    icon: 'fas fa-check',
    text: 'text-green-400',
    bg: 'bg-green-400',
  },
  ERROR: {
    icon: 'fas fa-times',
    text: 'text-red-400',
    bg: 'bg-red-400',
  },
  LOADING: {
    icon: 'fas fa-spinner fa-spin',
    text: 'text-blue-400',
    bg: 'bg-blue-400',
  },
}
export const UploadingSong = ({ name, progress, variant }) => {
  const icon = Variants[variant]?.icon ?? ''
  const text = Variants[variant]?.text ?? ''
  const bg = Variants[variant]?.bg ?? ''

  return (
    <div className="mb-4">
      <i className={`${icon} fa-l ${text} `} />
      <span className={`font-bold text-sm ml-2 ${text}`}>{name}</span>
      <div className="flex rounded overflow-hidden bg-gray-200 h-4">
        <div className={`transition-all progress-bar ${bg}`} style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
