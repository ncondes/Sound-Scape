import { useEffect, useState } from 'react'
import { SongsService } from '../services'

export const useSongs = () => {
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    // fetch songs
    SongsService.getSongs()
      .then((response) => {
        setSongs(response.data)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { songs, loading, error }
}
