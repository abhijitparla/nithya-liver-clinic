/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0BMeYlSq2zw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { StepFunction } from "./AppointmentShad"

export default function AppointmentSummary({stepFunc}: StepFunction) {
    const handlePayment = () => {
        stepFunc(2)
    }
  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <h1 className="text-2xl font-bold">Appointment Payment</h1>
          <p className="text-muted-foreground">Review and complete your payment for the upcoming appointment.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Appointment Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <div className="text-muted-foreground">Date</div>
              <div>June 25, 2023</div>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <div className="text-muted-foreground">Time</div>
              <div>3:00 PM</div>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <div className="text-muted-foreground">Service</div>
              <div>Teeth Cleaning</div>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <div className="text-muted-foreground">Provider</div>
              <div>Dr. Jane Doe</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payment Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <div className="text-muted-foreground">Service Fee</div>
              <div>$99.00</div>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <div className="text-muted-foreground">Discount</div>
              <div className="text-green-500">-$20.00</div>
            </div>
            <Separator />
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <div className="font-medium">Total</div>
              <div className="font-medium">$79.00</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full" onClick={handlePayment}>
              Complete Payment
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}