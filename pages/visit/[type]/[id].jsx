import Cast from '@/components/Cast'
import { getMovie } from '@/src/store/dashboard/slice'
import { getRuntime, getStartRate, getTitle } from '@/utils/functions'
import { getOriginalImage } from '@/utils/getImage'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Movie = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { id, type } = router.query
  const { movieData } = useSelector((store) => store.dashboard)

  useEffect(() => {
    if (type && id) {
      dispatch(getMovie({ type, id }))
    }
  }, [router.query])

  return (
    <div className="">
      <div className="hero">
        <div className="backdrop">
          <img src={getOriginalImage(movieData?.backdrop_path)} alt="" />
        </div>
        <div className="space-y-3 pane md:space-y-6">
          <p className="text-3xl font-semibold font-sec md:text-5xl">
            {getTitle(movieData)}
          </p>
          <div className="flex items-center space-x-4 text-sm font-sec text-sec/75 md:text-lg">
            <div className="flex">{getStartRate(movieData?.vote_average)}</div>
            <p>{movieData?.vote_count} Reviews</p>
            <p>
              {movieData?.release_date &&
                new Date(movieData?.release_date ?? null).getFullYear()}
            </p>
            <p>{getRuntime(movieData?.runtime ?? 0)}</p>
          </div>
          <p className="text-sm font-sec md:text-normal">
            {movieData?.overview ?? ''}
          </p>
        </div>
      </div>

      <div className="mx-4 my-12">
        <p className="w-full px-2 text-3xl font-semibold font-sec text-sec">
          Cast
        </p>
        <Cast data={movieData?.credits?.cast ?? []} />
      </div>
    </div>
  )
}

export default Movie
