import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";

export default function Timeline() {
  return (
    <div className="flex flex-col">
      <Tab.Group>
        <Tab.List className="text-center space-x-4 mb-2">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected ? "bg-blue-500 text-white" : "bg-white text-black"
                }
              >
                Tab 1
              </button>
            )}
          </Tab>
          <Tab className="white-glassmorphism p-2 text-gray-300 desc">
            Tab 2
          </Tab>
          <Tab className="white-glassmorphism p-2 text-gray-300 desc">
            Tab 3
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {" "}
            <div class="p-1 shadow-xl  rounded-2xl">
              <a
                class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
                href=""
              >
                <div class="mt-80 sm:pr-8">
                  <p class="mt-2 text-sm desc text-gray-300">Time graph 1</p>
                </div>
              </a>
            </div>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div class="flex flex-wrap -mx-3 overflow-hidden">
        <div class="my-3 px-3 w-1/2 overflow-hidden lg:w-1/4 xl:w-1/4">
          <div class="p-1 shadow-xl  rounded-2xl">
            <a
              class="block p-6 white-glassmorphism border sm:p-8 rounded-xl"
              href=""
            >
              <div class="mt-7 sm:pr-8">
                <h5 class="text-xl font-bold heading text-orange-300">
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
              <div class="mt-7 sm:pr-8">
                <h5 class="text-xl font-bold heading text-orange-300">30</h5>

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
              <div class="mt-7 sm:pr-8">
                <h5 class="text-xl font-bold heading text-orange-300">7777</h5>

                <p class="mt-2 text-sm desc text-gray-300">
                  Answered questions
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
              <div class="mt-7 sm:pr-8">
                <h5 class="text-xl font-bold heading text-orange-300">7777</h5>

                <p class="mt-2 text-sm desc text-gray-300">
                  Answered questions
                </p>
              </div>
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
