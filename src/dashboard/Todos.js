import React, { useState, Fragment } from "react";

export default function Todos() {
  return (
    <div className="flex flex-col">
      <div class="p-1 shadow-xl  rounded-2xl">
        <a
          class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
          href=""
        >
          <div class=" sm:pr-8 flex-col">
            <p class="mt-2 text-sm desc text-orange-300">Question</p>
          </div>
          <hr className="my-4" />
          <div className="justify-between flex">
            <div class=" sm:pr-8 flex-col">
              <p class="mt-2 text-sm desc text-gray-300">by Author</p>
            </div>
            <div class=" sm:pr-8 flex-col">
              <p class="mt-2 text-sm desc text-gray-300">Created on</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
