import React from 'react'
import WeatherCard from '../components/WeatherCard'
import GitHubCard from '../components/GitHubCard'

function Home() {
  return (
    <div className='bg-amber-200 p-20 flex flex-col md:flex-row justify-evenly'>
      <WeatherCard/>
      <GitHubCard/>
    </div>
  )
}

export default Home
