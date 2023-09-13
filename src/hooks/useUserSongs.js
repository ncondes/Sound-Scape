import { useEffect, useState } from 'react'
import { SongsService } from '../services'

export const useUserSongs = () => {
  const [songs, setSongs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    // fetch songs
    SongsService.getUserSongs()
      .then((response) => {
        setSongs(response.data)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return { songs, isLoading, error }
}
