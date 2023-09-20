import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row w-screen h-screen overflow-y-auto">
        <div className='flex w-full md:w-[50%] flex-shrink-0 h-full bg-green-200'>

        </div>
        <div className='flex flex-col flex-shrink-0 w-full md:w-[50%] h-full'>
            <Outlet/>
        </div>
    </div>
    </>
  )
}

export default Layout