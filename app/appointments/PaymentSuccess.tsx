/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uF74cxMCRks
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { StepFunction } from "./AppointmentShad"

export default function PaymentSuccess({stepFunc}:StepFunction) {
  return (
    <div className="flex flex-col items-center justify-center bg-background px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <CircleCheckIcon className="text-green-500 size-12" />
          <h1 className="text-2xl font-bold tracking-tight">Payment Successful</h1>
          <p className="text-muted-foreground">Your appointment has been booked successfully.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Appointment Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Date:</span>
              <span>June 28, 2023</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Time:</span>
              <span>3:00 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Location:</span>
              <span>123 Main St, Anytown USA</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Provider:</span>
              <span>Dr. Jane Doe</span>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center">
          <Link
            href="/appointments"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
            onClick={() => stepFunc(0)}
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

function CircleCheckIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}