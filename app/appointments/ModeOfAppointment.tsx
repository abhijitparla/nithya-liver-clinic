import React from "react";

const ModeOfAppointment = () => {
  return (
    <div className="mt-5">
        <p>Mode of Appointment</p>
      <fieldset>
        <legend className="sr-only">Countries</legend>

        <div className="flex items-center mb-4">
          <input
            id="country-option-1"
            type="radio"
            name="countries"
            value="USA"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            checked
          />
          <label className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
            Telephonic
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="country-option-2"
            type="radio"
            name="countries"
            value="Germany"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Face to Face
          </label>
        </div>

      </fieldset>
    </div>
  );
};

export default ModeOfAppointment;
