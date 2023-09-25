import { useEffect, useState } from 'react'
import { Button } from '../components/button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { SongsService } from '../services'
import { Controller, useForm } from 'react-hook-form'

const schema = {
  title: {
    required: 'Title is required',
    maxLength: { value: 50, message: 'Name cannot exceed 50 characters' },
    minLength: { value: 2, message: 'Name must be at least 2 characters' },
  },
}

export const ManageSongPage = () => {
  const defaultValues = async () => {
    const response = await SongsService.getSong(id)
    return response.data
  }

  const [song, setSong] = useState()

  const { control, handleSubmit } = useForm({
    defaultValues,
  })
  const navigate = useNavigate()
  const { id } = useParams()

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleSaveSong = handleSubmit((data) => {
    console.log(data)
  })

  // get song data
  useEffect(() => {
    SongsService.getSong(id).then((res) => setSong(res.data))
  }, [])

  // TODO: find a way to prevent the page to be loaded until the default values are set
  if (!song) return

  return (
    <section className="relative">
      {/* // TODO: convert this to a reusable component ? */}
      {/* back button */}
      <button
        aria-label="Close"
        className={`cursor-pointer absolute top-6 left-6 w-12 h-12 rounded-full hover:bg-neutral-500 hover:bg-opacity-30`}
        onClick={handleGoBack}
      >
        <i className="fa-regular fa-circle-left fa-2xl text-white"></i>
      </button>
      {/* background animation */}
      <div
        className="w-full bg-contain bg-center h-40 animation-bg"
        style={{ backgroundImage: "url('/assets/img/manage-background.png')" }}
      />
      {/* body */}
      <div className="relative container mx-auto my-20">
        {/* music icon */}
        <div className="absolute top-[-150px] left-0">
          <div className="flex items-center justify-center rounded-full w-32 h-32 bg-gradient-to-r from-violet-500 to-indigo-400">
            <i className="fa-solid fa-music text-[70px] text-white mr-2"></i>
          </div>
        </div>
        {/* body header */}
        <section className="flex justify-between mb-10">
          <h2 className="text-3xl font-semibold">Song</h2>
          <div className="flex gap-5">
            <Button variant="contained" className="py-1.5 px-6" onClick={handleSaveSong}>
              <i className="fa-solid fa-floppy-disk mr-2"></i>
              Save
            </Button>
          </div>
        </section>
        {/* // TODO: make a paper component ? */}
        {/* title */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded shadow w-full h-32 p-6">
            <label className="inline-block font-medium mb-2">Title</label>
            <Controller
              name="title"
              control={control}
              rules={schema.title}
              render={({ field, fieldState }) => (
                <>
                  <input
                    className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black focus:ring-0 rounded"
                    placeholder="Title"
                    type="text"
                    {...field}
                  />
                  {fieldState.error && <p className="text-red-600">{fieldState.error.message}</p>}
                </>
              )}
            />
          </div>
          {/* // TODO: */}
          {/* interactions */}
          <div className="bg-white rounded shadow w-full p-6"></div>
          {/* artists */}
          <div className="bg-white rounded shadow w-full p-6">
            <label className="inline-block font-medium mb-2">Artists</label>
            <input
              type="text"
              className="block w-full border border-gray-300 text-gray-800 py-1.5 px-3 transition duration-500 focus:outline-none focus:border-black focus:ring-0 rounded"
            />
            {/* chips */}
            {/* <div className="grid grid-cols-3 gap-4 mt-3">
              chip
              <div className="w-full rounded-2xl shadow border border-violet-400 h-6 "></div>
              <div className="w-full bg-red-400 h-5 "></div>
            </div> */}
            <ul>
              <li>
                <i className="fa-solid fa-microphone-lines mr-2"></i>Shakira
              </li>
              <li>
                <i className="fa-solid fa-microphone-lines mr-2"></i>Juanes
              </li>
            </ul>
          </div>
          {/* genre */}
          <div className="bg-white rounded shadow w-full h-32 p-6">
            <label className="inline-block font-medium mb-2">Genre</label>
          </div>
        </div>
      </div>
    </section>
  )
}
