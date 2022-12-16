import { getTrendingMovies } from '@/store/dashboard/slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Trending from '@/components/Trending'
import 'react-circular-progressbar/dist/styles.css'
import { Loader } from '@/components/Loader'

export default function Dashboard() {
  const dispatch = useDispatch()
  const { data } = useSelector((store) => store.dashboard)

  useEffect(() => {
    dispatch(getTrendingMovies({ type: 'movie' }))
    dispatch(getTrendingMovies({ type: 'tv' }))
  }, [])

  return (
    <div className="px-2 mt-4 space-y-6 text-xl font-semibold font-sec text-sec">
      <div>
        <p className="w-full md:px-2">Trending Movies</p>
        <Trending data={data?.movie} />
      </div>
      <div>
        <p className="w-full md:px-2">Trending TV Shows</p>
        <Trending data={data?.tv} />
      </div>
    </div>
  )
}
