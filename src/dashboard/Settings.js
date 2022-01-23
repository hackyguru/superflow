import React, { useRef, useState } from "react";
import storage from "../utils/storage";

export default function Settings() {
  const [favourites, setFavourites] = useState(
    storage.get("favourites") == null
      ? []
      : storage.get("favourites").split(",")
  );

  const inputRef = useRef();

  function addFavourite() {
    let favourite = inputRef.current.value;

    if (favourite == "") {
      return;
    }

    let temp_fav = new Set(favourites);
    temp_fav.add(favourite);
    temp_fav = Array.from(temp_fav);
    setFavourites(temp_fav);
    storage.save("favourites", temp_fav);
  }

  function removeFavourite(favourite) {
    let temp_fav = new Set(favourites);
    temp_fav.delete(favourite);
    temp_fav = Array.from(temp_fav);
    setFavourites(temp_fav);
    storage.save("favourites", temp_fav);
  }

  function clearStorage() {
    setFavourites([]);

    storage.clear();
  }

  return (
    <div className="flex flex-col">
      <div class="flex justify-between">
        <div>
          <h1 className="heading text-orange-300 text-xl mt-12">Tags</h1>
        </div>
      </div>

      {favourites.length ? (
        favourites.map((favourite, index) => (
          <div
            className="flex justify-between white-glassmorphism mt-4 w-full"
            key={index}
          >
            <h1 className="desc text-gray-300 text-left items-center mb-3 text-sm mt-3 ml-3">
              {favourite}
            </h1>
            <svg
              class="w-6 h-6 text-gray-300 hover:text-red-300 mt-3 mb-3 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => removeFavourite(favourite)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              >
                {""}
              </path>
            </svg>
          </div>
        ))
      ) : (
        <div>
          <h5 className="text-gray-300 mt-5">
            You dont have any favourite tags yet.
          </h5>
          <div class="mt-10">
            <input type="text" placeholder="Enter tag" ref={inputRef} />
            <button
              onClick={() => addFavourite()}
              class="ml-3 bg-black p-3 text-white"
            >
              Add Tag
            </button>
          </div>
        </div>
      )}
      <h1 className="heading text-orange-300 text-xl mt-10">
        Storage Preferences
        <br />
        <button
          onClick={() => clearStorage()}
          className="mt-3 bg-black p-3 text-white"
        >
          Clear storage
        </button>
      </h1>
    </div>
  );
}
