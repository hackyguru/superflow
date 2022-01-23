import React, { useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div class="flex flex-wrap -mx-3 overflow-hidden">
        <div class="my-3 px-3 w-1/2 overflow-hidden lg:w-1/4 xl:w-1/4">
          <div class="p-1 shadow-xl  rounded-2xl">
            <a
              class="block p-6 white-glassmorphism border sm:p-8 rounded-xl"
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

        <div class="my-3 px-3 w-1/2 overflow-hidden  lg:w-1/4 xl:w-1/4">
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
      <div class="flex flex-wrap -mx-3 overflow-hidden">
        <div class="my-3 px-3 w-full overflow-hidden lg:w-1/2">
          <div class="p-1 shadow-xl  rounded-2xl">
            <a
              class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
              href=""
            >
              <div class="mt-60 sm:pr-8">
                <p class="mt-2 text-sm desc text-gray-300">Graph 1</p>
              </div>
            </a>
          </div>{" "}
        </div>
        <div class="my-3 px-3 w-full overflow-hidden lg:w-1/2">
          <div class="p-1 shadow-xl  rounded-2xl">
            <a
              class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
              href=""
            >
              <div class="mt-60 sm:pr-8">
                <p class="mt-2 text-sm desc text-gray-300">Graph 2</p>
              </div>
            </a>
          </div>{" "}
        </div>
      </div>
      <h1 className="heading text-orange-300 text-xl mt-5 mb-3">Facts</h1>

      <div className="flex-col space-y-5 mt-3">
        <div class="p-1 shadow-xl  rounded-2xl">
          <a
            class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
            href=""
          >
            <div class=" sm:pr-8">
              <p class="mt-2 text-sm desc text-gray-300">
                Ratio between answered and unanswered questions are{" "}
                <span className="text-orange-300">1:3</span>
              </p>
            </div>
          </a>
        </div>
        <div class="p-1 shadow-xl  rounded-2xl">
          <a
            class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
            href=""
          >
            <div class=" sm:pr-8">
              <p class="mt-2 text-sm desc text-gray-300">
                Question <span className="text-orange-300">answer</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
