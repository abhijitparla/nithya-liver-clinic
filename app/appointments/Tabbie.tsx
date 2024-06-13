
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import BookAppointment from "./BookAppointment";

export function Tabbie() {
  return (
    <Tabs aria-label="Default tabs" style="default">
      <Tabs.Item active title="Book Appointment" icon={HiUserCircle}>
       <BookAppointment/>
      </Tabs.Item>
      <Tabs.Item title="My Appointments" icon={MdDashboard}>
        This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tabs associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item>
    </Tabs>
  );
}
