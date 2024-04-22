import React from 'react'
import { BsPlay } from 'react-icons/bs';

export default function Home() {
  console.log('HOME');

  return (
  <div className="home-container">
<div className='flex items-center justify-center h-screen bg-gray-800 p-4 mx-auto rounded-lg shadow-custom dark:border-yellow-700'>
  <video 
    className=' rounded-lg border bshadow dark:bg-gray-800 dark:border-gray-800 shadow-lg'
    loop
    controls
    autoPlay
    src="https://videos.pexels.com/video-files/3852658/3852658-uhd_3840_2160_30fps.mp4" 
    type="video/mp4"
  >
  </video>
</div>

    <div className='bubble'>
      <span style={{ '--i': 11 }}></span>
      <span style={{ '--i': 12 }}></span>
      <span style={{ '--i': 24 }}></span>
      <span style={{ '--i': 10 }}></span>
      <span style={{ '--i': 14 }}></span>
      <span style={{ '--i': 23 }}></span>
      <span style={{ '--i': 18 }}></span>
      <span style={{ '--i': 16 }}></span>
      <span style={{ '--i': 19 }}></span>
      <span style={{ '--i': 20 }}></span>
      <span style={{ '--i': 22 }}></span>
      <span style={{ '--i': 25 }}></span>
      <span style={{ '--i': 18 }}></span>
      <span style={{ '--i': 21 }}></span>
      <span style={{ '--i': 15 }}></span>
      <span style={{ '--i': 13 }}></span>
      <span style={{ '--i': 26 }}></span>
      <span style={{ '--i': 17 }}></span>
      <span style={{ '--i': 13 }}></span>
      <span style={{ '--i': 28 }}></span>
    </div>
  </div>
  )
}