import React from 'react'

function DashboardHeader() {
    return (
        <div className='bg-[#D5F2D0] w-full flex justify-between p-5'>
            <div className='flex flex-col justify-evenly w-4/5'>
                <h1 style={{ color: '#1E5128' }} className='text-lg font-bold'>Journey to Net-Zero Carbon</h1>
                <div className=' flex-wrap md:flex w-4/5 justify-between'>
                    <div className='flex gap-3 items-center'>
                        <img src="./dashboard_image/cloud.jpg" alt="" />
                        <span className='md:text-3xl font-bold'>314,519</span>
                        <span>MTCO2e</span>
                    </div>
                    <div  className='flex gap-3 items-center'>
                        <img src="./dashboard_image/earth.jpg" alt="" />
                        <span className='md:text-3xl font-bold'>314,519</span>
                        <span>MTCO2e</span>
                    </div>
                    <div  className='flex gap-3 items-center'>
                        <img src="./dashboard_image/plant.jpg" alt="" />
                        <span className='md:text-3xl font-bold'>314,519</span>
                        <span>MTCO2e</span>
                    </div>
                </div>
            </div>
            <img src="./dashboard_image/city.jpg" alt="" className='w-80 h-36 ' />
        </div>
    )
}

export default DashboardHeader