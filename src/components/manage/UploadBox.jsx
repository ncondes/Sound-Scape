import { useState } from 'react'
import { ref, uploadBytesResumable } from 'firebase/storage'
import { UploadingSong } from './UploadingSong'
import { storage } from '@/firebase'

export const UploadBox = () => {
  const [uploads, setUploads] = useState([])

  const handleUpload = (event) => {
    // get files from event
    const files = [...event.target.files]
    const allowedTypes = ['audio/mpeg', 'audio/mp3']

    files.forEach((file) => {
      // TODO: show error message if file type is not allowed
      if (!allowedTypes.includes(file.type)) return

      const songsRef = ref(storage, `songs/${file.name}`)
      const task = uploadBytesResumable(songsRef, file)

      const newUpload = {
        task,
        currentProgress: 0,
        name: file.name,
        variant: 'bg-blue-400',
        icon: 'fas fa-spinner fa-spin',
        textClass: '',
      }

      console.log({ newUpload })

      setUploads((prev) => [...prev, newUpload])
      // const uploadIndex = uploads.length - 1
    })
  }

  return (
    <section className="col-span-1">
      <div className="bg-white rounded border border-gray-200 flex flex-col">
        {/* header */}
        <div className="flex justify-between items-center px-6 pt-6 pb-5 border-b border-gray-200">
          <span className="font-bold">Upload</span>
          <i className="fa-sharp fa-solid fa-upload fa-xl text-lime" />
        </div>
        {/* content */}
        <div className="p-6">
          {/* upload dropbox */}
          <div className="w-full px-10 py-20 mb-6 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid">
            <span>Drop your files here</span>
          </div>
          <input className="w-full" type="file" multiple onChange={handleUpload} />
          <hr className="my-6" />
          {/* progress bars */}
          <UploadingSong progress={75} />
          <UploadingSong progress={35} />
          <UploadingSong progress={55} />
        </div>
      </div>
    </section>
  )
}
