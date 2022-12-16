import React from 'react'

export const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full p-2">
      <div
        className={`z-1 h-10 w-10  animate-spin rounded-full border-4 border-solid border-black border-t-transparent`}
      />
    </div>
  )
}