export const buildSongRef = (str) => {
  const result = str.replace(/ /g, '-').toLocaleLowerCase()
  const id = crypto.randomUUID().split('-')[0]

  return `${result}-${id}`
}
