import { ImgPlaceholder } from '@/assets/AllSvg'
import { searchMovies } from '@/src/store/dashboard/slice'
import { getImage } from '@/utils/getImage'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const index = () => {
  const dispatch = useDispatch()

  const [search, setSearch] = useState('hera')

  const { movieData } = useSelector((store) => store.dashboard)

  console.log(movieData, 'Movie Data')

  useEffect(() => {
    dispatch(searchMovies({ search }))
  }, [search])
    
    const myLoader = () => {
      return `https://example.com/`
    }

  return (
    <div className="space-y-12">
      <div className="flex w-full flex-col gap-2">
        <label htmlFor="search">Search Movie</label>
        <input
          id="search"
          type="text"
          name="search"
          value={search}
          className="w-1/3 rounded-2xl p-4 text-lg text-black"
          placeholder="Search Movie"
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
      </div>
      <div>
        <p>Results</p>
        <div className="grid  grid-cols-5 gap-2">
          {(movieData?.results ?? []).map((e, key) => {
            return e.media_type === 'movie' ? (
              <div key={key} className="relative rounded-2xl border-2 p-1">
                {e?.poster_path ? (
                  <img
                    src={getImage(e?.poster_path)}
                    alt="poster"
                    className="h-full w-full rounded-xl object-cover"
                  />
                ) : (
                  <span className="flex h-full items-center justify-center">
                    <ImgPlaceholder />
                  </span>
                )}
                <div className="absolute left-2 bottom-2">
                  <p>{e?.original_title}</p>
                </div>
              </div>
            ) : null
          })}
        </div>
      </div>
    </div>
  )
}

export default index
