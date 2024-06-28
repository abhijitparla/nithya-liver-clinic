/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4PG5BVKJokf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatePicker } from "./DatePicker";
import { Datepicker } from "flowbite-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export type StepFunction = {
  stepFunc: React.Dispatch<React.SetStateAction<number>>;
};
const appoitnmentSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is mandatory" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email" })
    .min(1),
  mobile: z
    .string({ message: "Please enter a valid phone number" })
    .min(10, { message: "Mobile number has to be 10 digits" })
    .max(10, { message: "Mobile number has to be 10 digit" }),
    dateOfAppointment: z.string({message: "Please select a valid date of appointment"}).min(1, {message: "Date of appointment is mandatory"}),
  timeSlot: z.string({ message: "Please select a suitable time slot"}).min(1, {message:"Time slot is mandatory"}),
  mode:z.string({message: "Please select a mode of appointment"}).min(1, {message: "Mode of appointment is mandatory"})
});
// .refine(data => data.timeSlot.trim() !== "", {
//   message: "time slot is mandatory",
//   path:["timeSlot"]
// })
export default function AppointmentShad({ stepFunc }: StepFunction) {
  const {
    register,
    formState: { errors, isSubmitting },
    reset,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(appoitnmentSchema),
  });
  const onSubmitZod = (data: FieldValues) => {
    console.log("inside submit zod fields", data);
  };
  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Book an Appointment</CardTitle>
        <CardDescription>
          Fill out the form to schedule your appointment.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit(onSubmitZod)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                {...register("name")}
                id="name"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p style={{ color: "red" }}>{`${errors.name.message}`}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p style={{ color: "red" }}>{`${errors.email.message}`}</p>
              )}
            </div>
          </div>
          <div className="space-y-2 mt-3">
            <Label htmlFor="mobile">Phone</Label>
            <div className="flex">
              <Input readOnly value="+91" className="w-14 mr-2" />
              <Input
                {...register("mobile")}
                id="mobile"
                type="number"
                placeholder="Enter your phone number"
              />
            </div>

            {errors.mobile && (
              <p style={{ color: "red" }}>{`${errors.mobile.message}`}</p>
            )}
          </div>
          <div className="space-y-2 mt-3">
            <Label>Date of Appointment</Label>
              <Datepicker {...register("dateOfAppointment")} ></Datepicker>
              {errors.dateOfAppointment && <p style={{ color: "red" }}>{`${errors.dateOfAppointment.message}`}</p> }
          </div>
          {/* <div className="space-y-2 flex flex-col mt-2">
          <Label htmlFor="date">Date</Label>
          <div className="relative max-w-sm">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </div>
            <input id="default-datepicker" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
          </div>
          {errors.dob && <p style={{color: "red"}}>{`${errors.dob.message}`}</p>}
        </div> */}
          <div className="space-y-2 mt-3">
            <Label >Time Slot</Label>
            <Select>
              <SelectTrigger id="timeSlot" >
                <SelectValue
                  placeholder="Select a time slot"
                  {...register("timeSlot")}
                />
              </SelectTrigger>
              <SelectContent >
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
            {errors.timeSlot && (
              <p style={{ color: "red" }}>{`${errors.timeSlot.message}`}</p>
            )}
          </div>
          <div className="space-y-2 mt-3">
            <Label>Mode of Appointment</Label>
            <RadioGroup {...register("mode")}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Telephonic</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Face to Face</Label>
              </div>
            </RadioGroup>
            {errors.mode && <p style={{color: "red"}}>{`${errors.mode.message}`}</p> }
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
  );
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
  );
}
