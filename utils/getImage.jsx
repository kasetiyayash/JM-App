export const getImage = (path, width) => {
  return `https://image.tmdb.org/t/p/w${width}${path}`
}

export const getOriginalImage = (path) => {
  return `https://image.tmdb.org/t/p/original/${path}`
}
