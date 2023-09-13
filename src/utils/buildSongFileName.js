export const buildSongFileName = (file) => {
  // remove the file extension MP3 or MPEG
  file = file.replace('.mp3', '')
  file = file.replace('.mpeg', '')
  const id = crypto.randomUUID().split('-')[1]

  return `${result}-[${id}]`
}
