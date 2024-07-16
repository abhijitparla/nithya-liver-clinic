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
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
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
  dateOfAppointment: z.date({
    message: "Please select a valid date of appointment",
  }),
  timeSlot: z
    .string({ message: "Please select a suitable time slot" })
    .min(1, { message: "Time slot is mandatory" }),
  mode: z.enum(["online", "faceToFace"], {
    message: "Please select a mode of appointment",
  }),
});
// .refine(data => data.timeSlot.trim() !== "", {
//   message: "time slot is mandatory",
//   path:["timeSlot"]
// })
export default function AppointmentShad({ stepFunc }: StepFunction) {
  const form = useForm<z.infer<typeof appoitnmentSchema>>({
    resolver: zodResolver(appoitnmentSchema),
    //any default values you'd like to give
  });
  const onSubmitZod = (fromData: z.infer<typeof appoitnmentSchema>) => {
    console.log("inside submit zod fields", fromData);
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitZod)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a valid email" {...field}></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile No</FormLabel>
                  <div className="flex ">
                    <Input value={"+91"} readOnly className="w-1/6" />
                    <FormControl>
                      <Input
                        placeholder="Enter a valid mobile number"
                        type="number"
                        {...field}
                        className="w-5/6 ml-2"
                      />
                    </FormControl>
                  </div>
                  <FormDescription>An OTP will be sent to this number</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateOfAppointment"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of appointment</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date > new Date(new Date().setDate(new Date().getDate() + 15))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeSlot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Slot</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a suitable time slot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0900">9:00 am</SelectItem>
                      <SelectItem value="1000">10:00 am</SelectItem>
                      <SelectItem value="1100">11:00 am</SelectItem>
                      <SelectItem value="1200">12:00 pm</SelectItem>
                      <SelectItem value="1300">01:00 pm</SelectItem>
                      <SelectItem value="1400">02:00 pm</SelectItem>
                      <SelectItem value="1500">03:00 pm</SelectItem>
                      <SelectItem value="1600">04:00 pm</SelectItem>
                      <SelectItem value="1700">05:00 pm</SelectItem>
                      <SelectItem value="1800">06:00 pm</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mode of appointment</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="online" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Telephonic Consultation
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="faceToFace" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Face to Face consultation
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
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
