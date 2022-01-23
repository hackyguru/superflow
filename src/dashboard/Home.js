import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Link } from "react-router-dom";

export default function Home(props) {
  let tag = props.selectedTag;
  let lastFetchedTag = props.mainState ? props.mainState.tag : null;

  const [isDataFetched, setIsDataFetched] = useState(
    props.mainState && tag === props.mainState.tag
  );

  const [total, setTotal] = useState(
    props.mainState && tag == props.mainState.tag
      ? props.mainState.results.total
      : null
  );
  const [answered, setAnswered] = useState(
    props.mainState && tag == props.mainState.tag
      ? props.mainState.results.answered
      : null
  );
  const [noAnswers, setNoAnswers] = useState(
    props.mainState && tag == props.mainState.tag
      ? props.mainState.results.noAnswers
      : null
  );
  const [unanswered, setUnanswered] = useState(
    props.mainState && tag == props.mainState.tag
      ? props.mainState.results.unanswered
      : null
  );

  let totalCount = null;
  let noAnsweredCount = null;

  const requests = {
    total: {
      endpoint: `tags/${tag}/info`,
      params: {
        filter: "!ak79D-dfS.RG3A",
      },
    },
    no_answers: {
      endpoint: `questions/no-answers`,
      params: {
        tagged: tag,
        filter: "!ak79D.FL9sVikC",
      },
    },
    unanswered: {
      endpoint: `questions/unanswered`,
      params: {
        tagged: tag,
        filter: "!ak79D*ObLmc-5_",
      },
    },
  };

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  async function fetchData() {
    if (lastFetchedTag === tag) {
      return;
    }
    setIsDataFetched(false);
    await asyncForEach(
      Object.entries(requests),
      async ([request_name, request]) => {
        await axios
          .get(request.endpoint, {
            params: request.params,
          })
          .then(async (response) => {
            switch (request_name) {
              case "total":
                totalCount = response.data.items[0].count;
                setTotal(response.data.items[0].count);
                break;
              case "no_answers":
                noAnsweredCount = response.data.total;
                break;
              case "unanswered":
                if (totalCount == null || noAnsweredCount == null) {
                }

                let unansweredResult = {
                  count: response.data.total - noAnsweredCount,
                  percentage:
                    Math.round(
                      ((response.data.total - noAnsweredCount) / totalCount) *
                        100 *
                        10
                    ) / 10,
                };
                setUnanswered(unansweredResult);

                let noAnsweredResult = {
                  count: noAnsweredCount,
                  percentage:
                    Math.round((noAnsweredCount / totalCount) * 100 * 10) / 10,
                };
                setNoAnswers(noAnsweredResult);

                let answeredResult = {
                  count: totalCount - response.data.total,
                  percentage:
                    Math.round(
                      ((totalCount - response.data.total) / totalCount) *
                        100 *
                        10
                    ) / 10,
                };
                setAnswered(answeredResult);

                setIsDataFetched(true);
                lastFetchedTag = tag;
                props.updateMainState({
                  tag: tag,
                  results: {
                    total: totalCount,
                    answered: answeredResult,
                    noAnswers: noAnsweredResult,
                    unanswered: unansweredResult,
                  },
                });

                break;
            }
          });
      }
    );
  }

  useEffect(async () => {
    if (tag) {
      await fetchData();
    }
  }, [tag]);

  return tag ? (
    isDataFetched ? (
      <div className="flex flex-col">
        <div className="flex flex-wrap -mx-3 overflow-hidden">
          <div className="my-3 px-3 w-1/2 overflow-hidden lg:w-1/4 xl:w-1/4">
            <div className="p-1 shadow-xl  rounded-2xl">
              <a
                className="block p-6 white-glassmorphism border sm:p-8 rounded-xl"
                href=""
              >
                <div className="mt-7 sm:pr-8">
                  <h5 className="text-xl font-bold heading text-orange-300">
                    {total}
                  </h5>

                  <p className="mt-2 text-sm desc text-gray-300">Total questions</p>
                </div>
              </a>
            </div>
          </div>

          <div className="my-3 px-3 w-1/2 overflow-hidden  lg:w-1/4 xl:w-1/4">
            <div className="p-1 shadow-xl  rounded-2xl">
              <div className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl">
                <div className="mt-7 sm:pr-8">
                  <h5 className="text-xl font-bold heading text-orange-300">
                    {answered.count}
                  </h5>

                  <p className="mt-2 text-sm desc text-gray-300">
                    Answered questions
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>

          <div className="my-3 px-3 w-1/2 overflow-hidden lg:w-1/4 xl:w-1/4">
            <div className="p-1 shadow-xl  rounded-2xl">
              <div className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl">
                <div className="mt-7 sm:pr-8">
                  <h5 className="text-xl font-bold heading text-orange-300">
                    {unanswered.count}
                  </h5>

                  <p className="mt-2 text-sm desc text-gray-300">
                    Unanswered questions
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>

          <div className="my-3 px-3 w-1/2 overflow-hidden lg:w-1/4 xl:w-1/4">
            <div className="p-1 shadow-xl  rounded-2xl">
              <div className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl">
                <div className="mt-7 sm:pr-8">
                  <h5 className="text-xl font-bold heading text-orange-300">
                    {noAnswers.count}
                  </h5>

                  <p className="mt-2 text-sm desc text-gray-300">
                    Not answered questions
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 overflow-hidden">
          <div className="my-3 px-3 w-full overflow-hidden lg:w-1/2">
            <div className="p-1 shadow-xl  rounded-2xl">
              <div className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl">
                <div className="mt-60 sm:pr-8">
                  <p className="mt-2 text-sm desc text-gray-300">Graph 1</p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="my-3 px-3 w-full overflow-hidden lg:w-1/2">
            <div className="p-1 shadow-xl  rounded-2xl">
              <a
                className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
                href=""
              >
                <div className="mt-60 sm:pr-8">
                  <p className="mt-2 text-sm desc text-gray-300">Graph 2</p>
                </div>
              </a>
            </div>{" "}
          </div>
        </div>
      <h1 className="heading text-orange-300 text-xl mt-5 mb-3">Facts</h1>

      <div className="flex-col space-y-5 mt-3">
        <div className="p-1 shadow-xl  rounded-2xl">
          <a
            className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
            href=""
          >
            <div className=" sm:pr-8">
              <p className="mt-2 text-sm desc text-gray-300">
                Ratio between answered and unanswered questions are{" "}
                <span className="text-orange-300">1:3</span>
              </p>
            </div>
          </a>
        </div>
        <div className="p-1 shadow-xl  rounded-2xl">
          <a
            className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl"
            href=""
          >
            <div className=" sm:pr-8">
              <p className="mt-2 text-sm desc text-gray-300">
                Question <span className="text-orange-300">answer</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    ) : (
      <div>
        Fetching......
      </div>
    ) //TODO
  ) : (
    <div>You have not added any tag yet</div> //TODO
  );
}
