import { Button, Datepicker, Dropdown, Label } from "flowbite-react";
import React from "react";
import TimeSlot from "./TimeSlot";
import ModeOfAppointment from "./ModeOfAppointment";

const AppointmentForm = () => {
  return (
    <div className="p-5">
      <form action="">
        {
          //Date of Appointment
          // Time Slot
          //Mode of consultation
          //Proceed to checkout button
        }
        <div className="max-w-lg">
            <Label className="mb-1" value="Date of Appointment" />
            <Datepicker />
        </div>
        
        <TimeSlot />
        <ModeOfAppointment/>
        <Button className="mt-3">Proceed to checkout</Button>
      </form>
    </div>
  );
};

export default AppointmentForm;
