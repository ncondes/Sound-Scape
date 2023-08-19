export const UploadingSong = ({ progress }) => {
  return (
    <div className='mb-4'>
      <label className='font-bold text-sm'>Just another song.mp3</label>
      <div className='flex rounded overflow-hidden bg-gray-200 h-4'>
        <div
          className='transition-all progress-bar bg-blue-400'
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
