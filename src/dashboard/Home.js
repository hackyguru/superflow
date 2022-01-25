import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

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

  function renderPieChart() {
    if (isDataFetched) {
      ChartJS.register(ArcElement, Tooltip, Legend);

      return (
        <Pie
          data={{
            labels: ["Answered", "Unanswered", "Not-answered"],
            datasets: [
              {
                label: "Tag status",
                data: [
                  answered.percentage,
                  unanswered.percentage,
                  noAnswers.percentage,
                ],
                backgroundColor: [
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(255, 99, 132, 0.2)",
                ],
                borderColor: [
                  "rgba(75, 192, 192, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(255, 99, 132, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: "white",
                },
              },
              tooltip: {
                bodySpacing: 6,
                callbacks: {
                  label: function (context) {
                    return context.label + ": " + context.parsed + "%";
                  },
                },
              },
            },
          }}
          plugins={[
            {
              id: "legendDistance",
              beforeInit(chart, args, opts) {
                const originalFit = chart.legend.fit;
                chart.legend.fit = function fit() {
                  originalFit.bind(chart.legend)();
                  this.height += 15;
                };
              },
            },
          ]}
        />
      );
    }

    return "";
  }

  function renderBarChart() {
    if (isDataFetched) {
      ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

      const options = {
        scales: {
          x: {
            ticks: {
              color: "white",
            },
          },
          y: {
            ticks: {
              color: "white",
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        color: "white",
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            bodySpacing: 6,
            callbacks: {
              title: function () {},
              label: function (context) {
                return context.label + ": " + context.formattedValue;
              },
            },
          },
        },
      };

      const labels = ["Total", "Answered", "Unanswered", "Not-answered"];

      const data = {
        labels,
        datasets: [
          {
            label: "Tag stats",
            data: [total, answered.count, unanswered.count, noAnswers.count],
            backgroundColor: [
              "rgba(75, 192, 192, 0.3)",
              "rgba(127, 255,  0, 0.3)",
              "rgba(255, 206, 86, 0.3)",
              "rgba(255, 99, 132, 0.3)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(127, 255,  0, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

      return <Bar options={options} data={data} />;
    }
    return "";
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
              <div className="block p-6 white-glassmorphism border sm:p-8 rounded-xl">
                <div className="mt-7 sm:pr-8">
                  <h5 className="text-xl font-bold heading text-orange-300">
                    {total}
                  </h5>

                  <p className="mt-2 text-sm desc text-gray-300">
                    Total Questions
                  </p>
                </div>
              </div>
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
            </div>
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
            </div>
          </div>

          <div className="my-3 px-3 w-1/2 overflow-hidden lg:w-1/4 xl:w-1/4">
            <div className="p-1 shadow-xl  rounded-2xl">
              <div className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl">
                <div className="mt-7 sm:pr-8" style={{ "min-width": 201 }}>
                  <h5 className="text-xl font-bold heading text-orange-300">
                    {noAnswers.count}
                  </h5>

                  <p className="mt-2 text-sm desc text-gray-300">
                    Not answered questions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 overflow-hidden">
          <div className="my-3 px-3 w-full overflow-hidden lg:w-1/2">
            <div className="p-1 shadow-xl  rounded-2xl">
              <div className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl">
                <div className="sm:pr-8">{renderPieChart()}</div>
              </div>
            </div>
          </div>
          <div className="my-3 px-3 w-full overflow-hidden lg:w-1/2">
            <div className="p-1 shadow-xl  rounded-2xl">
              <div className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl">
                <div className="sm:pr-8" style={{ "min-height": 460 }}>
                  {renderBarChart()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="heading text-orange-300 text-xl mt-5 mb-3">Facts</h1>

        <div className="flex-col space-y-5 mt-3">
          <div className="p-1 shadow-xl  rounded-2xl">
            <div className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl">
              <div className=" sm:pr-8">
                <p className="mt-2 text-sm desc text-gray-300">
                  Ratio between answered and unanswered questions are{" "}
                  <span className="text-orange-300">1:3</span>
                </p>
              </div>
            </div>
          </div>
          <div className="p-1 shadow-xl  rounded-2xl">
            <div className="block p-6 white-glassmorphism    border sm:p-8 rounded-xl">
              <div className=" sm:pr-8">
                <p className="mt-2 text-sm desc text-gray-300">
                  Question <span className="text-orange-300">answer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>Fetching......</div>
    ) //TODO
  ) : (
    <div>You have not added any tag yet</div> //TODO
  );
}
