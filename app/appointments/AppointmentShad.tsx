/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4PG5BVKJokf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import {z} from 'zod'
import {FieldValues, useForm} from 'react-hook-form'
export type StepFunction = {
    stepFunc: React.Dispatch<React.SetStateAction<number>>
}
const appoitnmentSchema = z.object({
  name: z.string().min(1, {message:"Name cannot be empty"}),
  email: z.string().email(),
  mobile: z.number(),
  dateOfAppointment: z.date(),
  timeSlot: z.string(),
  mode:z.string()
})
export default function AppointmentShad({stepFunc}:StepFunction) {
    const {register, formState: { errors, isSubmitting}, reset, handleSubmit} = useForm()
    const onSubmit = (data: FieldValues) => {
      console.log("inside submit ", data)
    } 
  return (
    
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Book an Appointment</CardTitle>
        <CardDescription>Fill out the form to schedule your appointment.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input {...register("name")} id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input {...register("email")} id="email" type="email" placeholder="Enter your email" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input {...register("mobile")} id="phone" type="tel" placeholder="Enter your phone number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button {...register("dateOfAppointment")} variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                Select a date
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar  mode="single" initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="time">Time</Label>
          <Select {...register("timeSlot")}>
            <SelectTrigger id="time">
              <SelectValue placeholder="Select a time slot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9:00 AM">9:00 AM</SelectItem>
              <SelectItem value="10:00 AM">10:00 AM</SelectItem>
              <SelectItem value="11:00 AM">11:00 AM</SelectItem>
              <SelectItem value="12:00 PM">12:00 PM</SelectItem>
              <SelectItem value="1:00 PM">1:00 PM</SelectItem>
              <SelectItem value="2:00 PM">2:00 PM</SelectItem>
              <SelectItem value="3:00 PM">3:00 PM</SelectItem>
              <SelectItem value="4:00 PM">4:00 PM</SelectItem>
              <SelectItem value="5:00 PM">5:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
        <Button type="submit" className="w-full mt-10">
          Book Appointment
        </Button>
        </div>
        </form>
      </CardContent>
      {/* <CardFooter>
        
      </CardFooter> */}
    </Card>
  )
}

function CalendarDaysIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}