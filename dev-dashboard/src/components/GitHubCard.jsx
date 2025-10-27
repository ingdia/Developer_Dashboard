import React from 'react'
import image from "../assets/image.png"

function GitHubCard() {
   const {mydata, err, isloading} = useFetch("https://api.github.com/users/ingdia")
  return (
    <section className='bg-white py-10 p-10 rounded-2xl md:w-[400px]'>
    <h1 className='text-2xl font-bold'>Github</h1>
    <div className='  flex flex-col md:flex-row justify-evenly pt-5 '>
      
      <div className='w-[100px] h-[100px] '>
         <img src={image}/>
      </div>
      <div className='flex flex-col gap-4'>
         <div className=''>
            <h2 className='text-2xl font-bold'> 54 </h2>
            <p className='text-xl text-gray-600'> repo</p>
         </div>
         <div>
            <h2 className='text-2xl font-bold'> 54 </h2>
            <p className='text-xl text-gray-600'> repo</p>
         </div>
         <div>
            <h2 className='text-2xl font-bold'> 54 </h2>
            <p className='text-xl text-gray-600'> repo</p>
         </div>
      </div>
    </div>
    </section>
  )
}

export default GitHubCard
