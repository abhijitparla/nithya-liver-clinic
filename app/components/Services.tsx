import React from "react";
import Equipment from "../../assets/equipment.jpg";
import Image from "next/image";
const Services = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6 ">
          <Image
            className="mb-4 w-full lg:mb-0 rounded-lg"
            src={Equipment}
            alt="feature image"
          />
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Services
            </h2>
            {/* <p className="mb-8 font-light lg:text-xl">
              We offer a wide range of services including some complex medical procedures such as endoscopy, colonoscopy and general consultations. Additionally, 
              we also offer Telephonic consultation considering how difficult it gets to travel from one part of the city to other.
            </p> */}
            <div className="py-8 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
              <div className="flex">
                <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    Telephonic Consultation
                  </h3>
                  <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                    Host code that you dont want to share with the world in
                    private GitHub repos only accessible to you and people you
                    share them with.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-600"
                  >
                    Learn more
                    <svg
                      className="ml-1 w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    Face to Face Consultation
                  </h3>
                  <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                    Host code that you dont want to share with the world in
                    private GitHub repos only accessible to you and people you
                    share them with.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-600"
                  >
                    Learn more
                    <svg
                      className="ml-1 w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex pt-8">
                {/* <div className="flex justify-center items-center mr-4 w-8 h-8 bg-purple-100 rounded-full dark:bg-purple-900 shrink-0">
                  <svg
                    className="w-5 h-5 text-purple-600 dark:text-purple-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div> */}
                {/* <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    Face to Face Consultation
                  </h3>
                  <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                    See the packages your project depends on, the repositories
                    that depend on them, and any vulnerabilities detected.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-600"
                  >
                    Learn more
                    <svg
                      className="ml-1 w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div> */}
              </div>
              <div className="flex pt-8">
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    Endoscopy
                  </h3>
                  <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                    Find vulnerabilities in custom code using static analysis.
                    Prevent new vulnerabilities from being introduced by
                    scanning every pull request.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800 dark:text-teal-500 dark:hover:text-teal-600"
                  >
                    Learn more
                    <svg
                      className="ml-1 w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    Colonoscopy
                  </h3>
                  <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                    Find vulnerabilities in custom code using static analysis.
                    Prevent new vulnerabilities from being introduced by
                    scanning every pull request.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800 dark:text-teal-500 dark:hover:text-teal-600"
                  >
                    Learn more
                    <svg
                      className="ml-1 w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* <p className="text-sm">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
