import { getImage, getOriginalImage } from '@/utils/getImage'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Loader } from './Loader'

const Trending = ({ data }) => {
  const carousel = useRef(null)
  const router = useRouter()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [data])

  const MovieImage = ({ item }) => {
    const [isLoading, setIsLoading] = useState(true)
    return (
      <m.div
        onClick={() => {
          router.push(`visit/${item.media_type}/${item.id}`)
        }}
        className="relative w-full min-w-[10rem] py-2 md:min-w-[13rem] md:py-6 lg:min-w-[15rem] xl:min-w-[16rem]"
      >
        {isLoading && (
          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <Loader />
          </div>
        )}
        <Image
          width={160}
          height={256}
          alt="poster"
          loading="lazy"
          placeholder="blur"
          blurDataURL={`/placeholder.webp`}
          src={getOriginalImage(item?.poster_path)}
          onLoadingComplete={() => {
            setIsLoading(false)
          }}
          className="pointer-events-none h-full w-full rounded-xl drop-shadow-[0px_0px_3px_rgb(252,243,234)]"
        />
      </m.div>
    )
  }

  return (
    <m.div className="w-full h-full overflow-hidden" ref={carousel}>
      <m.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex px-2 space-x-4"
      >
        {(data ?? [])?.map((item, key) => {
          return <MovieImage key={key} item={item} />
        })}
      </m.div>
    </m.div>
  )
}
export default Trending
