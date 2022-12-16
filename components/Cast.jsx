import { getOriginalImage } from '@/utils/getImage'
import { motion as m } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { Loader } from './Loader'

const Cast = ({ data }) => {
  const carousel = useRef(null)
  const router = useRouter()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [data])

    const CastImage = ({ item }) => {
      console.log(item, 'item')
    const [isLoading, setIsLoading] = useState(true)
    return (
      <div>
        <div className="relative w-full min-w-[10rem] py-2 md:min-w-[13rem] md:py-6 lg:min-w-[15rem] xl:min-w-[15rem]">
          {isLoading && (
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <Loader />
            </div>
          )}
          <Image
            width={240}
            height={360}
            alt="poster"
            loading="lazy"
            placeholder="blur"
            blurDataURL={`/placeholder.webp`}
            src={getOriginalImage(item?.profile_path)}
            onLoadingComplete={() => {
              setIsLoading(false)
            }}
            className="pointer-events-none h-full w-full rounded-xl drop-shadow-[0px_0px_3px_rgb(252,243,234)]"
          />
        </div>
        <div className="flex flex-col w-full font-sec text-sec">
          <p>{item?.name ?? ''}</p>
          <p className="text-sec/50">{item?.character ?? ''}</p>
        </div>
      </div>
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
          return <CastImage key={key} item={item} />
        })}
      </m.div>
    </m.div>
  )
}
export default Cast
