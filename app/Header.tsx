import { Button } from '@/components/ui/button'
import React from 'react'

const Header = () => {
  return (
    <div className='p-3 flex justify-between mx-auto shadow-xl'>
      <div className='text-2xl font-semibold font-serif'>
        Nithya Gastroentology and Liver Clinic
      </div>
      <div>
        <Button className='mr-5'>Book Appointment</Button>
        <Button variant={'outline'}>Sign up</Button>
      </div>
    </div>
  )
}

export default Header
