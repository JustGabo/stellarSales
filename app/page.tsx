import React from 'react'
import NavBar from '@/components/navBar'
import Main from '@/components/main'

function page() {
  return (
    <div className=' p-10 flex flex-col gap-20'>
      <NavBar/>
      <Main/>
    </div>
  )
}

export default page
