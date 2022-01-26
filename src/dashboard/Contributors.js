import React, { useEffect, useState } from "react";
import axios from "../utils/axios";

export default function Contributors(props) {
  let tag = props.selectedTag;
  let lastFetchedTag = props.mainState ? props.mainState.tag : null;

  const [type, setType] = useState(
    props.mainState ? props.mainState.type : "all_time"
  );

  const [data, setData] = useState(
    props.mainState ? props.mainState.results : null
  );
  const [isDataFetched, setIsDataFetched] = useState(
    props.mainState && tag === props.mainState.tag
  );

  let isDataFetching = false;

  function fetchData() {
    if (
      (lastFetchedTag === tag && type === props.mainState.type) ||
      isDataFetching
    ) {
      return;
    }

    isDataFetching = true;
    setIsDataFetched(false);

    axios
      .get(`tags/${tag}/top-answerers/${type}`, {
        params: {
          filter: "!*Ju)p0ttBPcC7GlM",
        },
      })
      .then((response) => {
        setData(response.data);
        setIsDataFetched(true);
        lastFetchedTag = tag;
        props.updateMainState({
          tag: tag,
          type: type,
          results: response.data,
        });
        isDataFetching = false;
      });
  }

  useEffect(async () => {
    if (tag) {
      await fetchData();
    }
  }, [tag, type]);

  return tag ? (
    <div>
      <select
        onChange={(e) => setType(e.target.value)}
        className={"mr-4 mb-3"}
        defaultValue={type}
      >
        <option value="all_time">All time</option>
        <option value="month">Current month</option>
      </select>
      {isDataFetched ? (
        <div className="flex flex-col">
          <div class="flex flex-wrap -mx-3 overflow-hidden">
            {data.items.map((answerer, index) => (
              <div
                class="my-3 px-3 w-full overflow-hidden lg:w-1/2"
                key={index}
              >
                <div class="p-1 shadow-xl  rounded-2xl">
                  <a
                    class="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
                    href={answerer.user.link}
                  >
                    <div class=" sm:pr-8">
                      <div className="flex space-x-10">
                        <img
                          src={answerer.user.profile_image}
                          className="h-25 w-24"
                          alt={answerer.user.display_name}
                        />
                        <div>
                          <p class="mt-2 text-sm desc text-gray-300">
                            Name: {answerer.user.display_name}
                          </p>
                          <p class="mt-2 text-sm desc text-gray-300">
                            Post count: {answerer.post_count}
                          </p>
                          <p class="mt-2 text-sm desc text-gray-300">
                            Score: {answerer.score}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Fetching....</div>
      )}
      {/*//TODO*/}
    </div>
  ) : (
    <div>You have not added any tag yet</div> //TODO
  );
}
