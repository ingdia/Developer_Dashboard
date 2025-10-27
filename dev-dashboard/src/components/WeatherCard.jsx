import React from 'react'
import {CloudSun} from "lucide-react"
import useFetch from '../hooks/useFetch'

function WeatherCard() {
  

  return (
    <div className='bg-white py-10 px-[50px] rounded-2xl'>
      <h1 className='text-3xl p-3 font-bold'>Current Weather</h1>
      <div className='flex justify-between p-4 px-2 text-5xl'>
        <div><CloudSun className='w-[50px] h-[50px]'/></div>
        <h3>72</h3>
      </div>
      <div className='flex justify-between p-4'>
        <p className='text-gray-500 text-xl'>Wind</p>
        <p>3mph</p>
      </div>
      <div className='flex justify-between p-4'>
        <p className='text-gray-500 text-xl'>Time</p>
        <p>1:45pm </p>
      </div>
    </div>
  )
}

export default WeatherCard
