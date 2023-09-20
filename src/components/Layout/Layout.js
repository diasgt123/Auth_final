import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className="flex flex-row w-screen h-screen">
        <div className='flex w-[50%] h-full bg-green-200'>

        </div>
        <div className='flex flex-col w-[50%] h-full'>
            <Outlet/>
        </div>
    </div>
    </>
  )
}

export default Layout