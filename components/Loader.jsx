import React from 'react'
import Lottie from 'react-lottie'
import animationData from '@/assets/lotties/loader.json'

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 transform">
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  )
}

export default Loader