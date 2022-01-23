import React from "react";
import { Tab } from "@headlessui/react";

export default function Timeline() {
  return (
    <div className="flex flex-col">
      <Tab.Group>
        <Tab.List className="text-center space-x-3 mb-3">
          <Tab
            className={({ selected }) =>
              selected
                ? "glass p-2 text-orange-300 border border-orange-300 desc"
                : "white-glassmorphism p-2 text-gray-300 desc"
            }
          >
            Tab 1
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "glass p-2 text-orange-300 border border-orange-300 desc"
                : "white-glassmorphism p-2 text-gray-300 desc"
            }
          >
            Tab 2
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "glass p-2 text-orange-300 border border-orange-300 desc"
                : "white-glassmorphism p-2 text-gray-300 desc"
            }
          >
            {" "}
            Tab 3
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div class="p-1 shadow-xl  rounded-2xl">
              <a
                class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
                href=""
              >
                <div class="mt-72 sm:pr-8">
                  <p class="mt-2 text-sm desc text-gray-300">Time graph 1</p>
                </div>
              </a>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {" "}
            <div class="p-1 shadow-xl  rounded-2xl">
              <a
                class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
                href=""
              >
                <div class="mt-72 sm:pr-8">
                  <p class="mt-2 text-sm desc text-gray-300">Time graph 2</p>
                </div>
              </a>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {" "}
            <div class="p-1 shadow-xl  rounded-2xl">
              <a
                class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
                href=""
              >
                <div class="mt-72 sm:pr-8">
                  <p class="mt-2 text-sm desc text-gray-300">Time graph 3</p>
                </div>
              </a>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div class="flex flex-wrap -mx-3 overflow-hidden">
        <div class="my-3 px-3 w-1/2 overflow-hidden lg:w-1/4 xl:w-1/4">
          <div class="p-1 shadow-xl  rounded-2xl">
            <a
              class="block p-6 white-glassmorphism border sm:p-8 rounded-xl"
              href=""
            >
              <div class=" sm:pr-8">
                <h5 class="text-md font-bold heading text-orange-300">
                  500 min
                </h5>

                <p class="mt-2 text-sm desc text-gray-300">
                  Median answer time
                </p>
              </div>
            </a>
          </div>{" "}
        </div>

        <div class="my-3 px-3 w-1/2 overflow-hidden  lg:w-1/4 xl:w-1/4">
          <div class="p-1 shadow-xl  rounded-2xl">
            <a
              class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
              href=""
            >
              <div class="sm:pr-8">
                <h5 class="text-md font-bold heading text-orange-300">30</h5>

                <p class="mt-2 text-sm desc text-gray-300">
                  Question volume / hour
                </p>
              </div>
            </a>
          </div>{" "}
        </div>

        <div class="my-3 px-3 w-1/2 overflow-hidden lg:w-1/4 xl:w-1/4">
          <div class="p-1 shadow-xl  rounded-2xl">
            <a
              class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
              href=""
            >
              <div class="sm:pr-8">
                <h5 class="text-md font-bold heading text-orange-300">7777</h5>

                <p class="mt-2 text-sm desc text-gray-300">Tag age</p>
              </div>
            </a>
          </div>{" "}
        </div>

        <div class="my-3 px-3 w-1/2 overflow-hidden lg:w-1/4 xl:w-1/4">
          <div class="p-1 shadow-xl  rounded-2xl">
            <a
              class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
              href=""
            >
              <div class="sm:pr-8">
                <h5 class="text-md font-bold heading text-green-300">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </h5>

                <p class="mt-2 text-sm desc text-gray-300">
                  Tag health over time
                </p>
              </div>
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
