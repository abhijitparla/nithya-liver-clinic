import React from 'react'
import Stepper from './Stepper'
import AppointmentForm from './AppointmentForm'

const BookAppointment = () => {
  return (
    <div>
        <h1 className='text-2xl font-semibold'>Book Appointment</h1>
      {/* <Stepper/> */}
        <AppointmentForm/>
    </div>
  )
}

export default BookAppointment
