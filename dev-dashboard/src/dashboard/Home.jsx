import React from 'react'
import WeatherCard from '../components/WeatherCard'
import GitHubCard from '../components/GitHubCard'

function Home() {
  return (
    <div className='bg-amber-200 min-h-screen p-20'>
      <WeatherCard/>
      <GitHubCard/>
    </div>
  )
}

export default Home
