import React, { useState } from "react";

export default function Contributors() {
  return (
    <div className="flex flex-col">
      <div class="flex flex-wrap -mx-3 overflow-hidden">
        <div class="my-3 px-3 w-full overflow-hidden lg:w-1/2">
          <div class="p-1 shadow-xl  rounded-2xl">
            <a
              class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
              href=""
            >
              <div class=" sm:pr-8">
                <div className="flex space-x-10">
                  <img src="" className="h-25 w-24" />
                  <div>
                    <p class="mt-2 text-sm desc text-gray-300">Name</p>
                    <p class="mt-2 text-sm desc text-gray-300">Place</p>

                    <p class="mt-2 text-sm desc text-gray-300">Tags</p>
                    <p class="mt-2 text-sm desc text-gray-300">
                      Reputation points
                    </p>
                  </div>
                </div>
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
              <div class=" sm:pr-8">
                <div className="flex space-x-10">
                  <img src="" className="h-25 w-24" />
                  <div>
                    <p class="mt-2 text-sm desc text-gray-300">Name</p>
                    <p class="mt-2 text-sm desc text-gray-300">Place</p>

                    <p class="mt-2 text-sm desc text-gray-300">Tags</p>
                    <p class="mt-2 text-sm desc text-gray-300">
                      Reputation points
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
