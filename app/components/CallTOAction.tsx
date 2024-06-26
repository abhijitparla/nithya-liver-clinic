import React from 'react'

const CallTOAction = () => {
  return (
    <div>
      <section className="bg-slate-300 dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-md text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Dont suffer in silence</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Consult us today and even get a 50% off on you first consultation.</p>
            {/* <form action="#" className="mx-auto max-w-screen-sm">
                <div className="flex items-center mb-3">
                    <div className="relative mr-3 w-full">
                        <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </div>
                        <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" name="member[email]" id="member_email" />
                    </div>
                    <div>
                        <input type="submit" value="Subscribe" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" name="member_submit" id="member_submit" />
                    </div>
                </div>
                <div className="text-sm font-medium text-left text-gray-500 dark:text-gray-300">Instant signup. No credit card required. <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">Terms of Service</a> and <a className="text-primary-600 hover:underline dark:text-primary-500" href="#">Privacy Policy</a>.</div>
            </form> */}
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Book Appointment Now!</button>
        </div>
    </div>
</section>
    </div>
  )
}

export default CallTOAction