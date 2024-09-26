import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-full aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>

      <div className='flex gap-3'>
        <button className='text-white text-xl bg-opacity-50 bg-slate-500 py-3 px-7 rounded-md'>Play</button>
        <button className='text-white text-xl bg-opacity-50 bg-slate-500 py-3 px-7 rounded-md'>More info</button>
      </div>

    </div>
  )
}

export default VideoTitle