'use client'
import React, { useRef, useState } from 'react'
import { Button, Popover } from 'flowbite-react'

const TimeSlot = () => {
    const [ampm, setAmpm] = useState("")
    const [time, setTime] = useState("")
    const ref = useRef(0)
    const handleClick = (e: any) => {
        console.log(e.target.innerHTML)
        setTime(e.target.innerHTML)
    }
    const getRightColor = () => {
        if(time){
            return "light"
        }
    }
  return (
    <div className='flex mt-5'>
      <p className='mr-3 self-center font-semibold'>Select time slot for appointment:</p>
<Popover
    aria-labelledby="default-popover"
    content={
      <div className="">
        {/* <div className='w-full text-center flex justify-evenly'>
            <div className=' w-full p-2 m-1'>
                <Button className='w-full' color="light">AM</Button>
            </div>
            <div className=' w-full p-2 m-1'>
                <Button className='w-full' color="light">PM</Button>
            </div>
        </div> */}
        <div className='grid grid-cols-4 gap-2 p-1'>
            <Button color="light" id="10:00" onClick={handleClick}>10:00 am </Button>
            <Button color="light" id="10:30" onClick={handleClick}>10:30 am</Button>
            <Button color="light" onClick={handleClick}>11:00</Button>
            <Button color="light" onClick={handleClick}>11:30</Button>
            <Button color="light" onClick={handleClick}>12:00</Button>
            <Button color="light" onClick={handleClick}>7:00</Button>
            <Button color="light" onClick={handleClick}>7:30</Button>
            <Button color="light" onClick={handleClick}>8:00</Button>
            <Button color="light" onClick={handleClick}>8:30</Button>
        </div>
      </div>
    }
  >
    <Button className=''>Select Time Slot</Button>
  </Popover>
  time
  <div className='self-center ml-2 bg-slate-300 p-2 rounded-lg'>
     {time} AM
  </div>
    </div>
    
  )
}

export default TimeSlot
