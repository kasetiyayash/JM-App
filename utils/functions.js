import { Star } from "react-feather"

export const getDownload = async ({
  id = '1iXIjmoKA0Xm6s8ttoew7vjbEDyX4w60P',
  name = 'file.mp4',
}) => {
  https: return await axios({
    url: `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=AIzaSyAYis76thBp-QUm03rvxsBp8jVVKiSlvWM`,
    // url: `https://www.pexels.com/video/856787/download/`,
    method: 'GET',
    responseType: 'blob', // important
    onDownloadProgress: (progressEvent) => {
      let percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      ) // you can use this to show user percentage of file downloaded
    },
  }).then((res) => {
    const href = URL.createObjectURL(res.data)

    const link = document.createElement('a')
    link.href = href
    link.setAttribute('download', name)
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    URL.revokeObjectURL(href)
  })
}


// getDownload({
//   id: '1o57tKOs4h_7fqtHj6C3AcQUozXJ516Wf',
//   name: 'Yash.mp4',
// })

export const getTitle = (data) => {
  return (
    data?.name ?? data?.title ?? data?.original_title ?? data?.original_name
  )
}

export const getRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60)
    const minutes = runtime % 60
    return `${hours}h ${minutes}min`
}

export const getStartRate = (rate) => {
  const star = Math.floor(rate) / 2
  const totalStar = Array(5).fill(1)
  console.log(star, totalStar, 'totalStar')
  return totalStar.map((_, key) => {
    return star >= key + 1 ? <Star fill="#fcf3ea" /> : <Star />
  })
}