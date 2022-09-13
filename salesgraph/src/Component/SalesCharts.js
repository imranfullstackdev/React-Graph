import {
  Chart as chartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

chartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderwidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true ,
      text: "LMV Sales CHART",
    },
  },
};
const labels = ["1st week", "2st week", "3st week", "4st week"];

// console.log(data);
const SalesCharts = () => {
  const [data, setdata] = useState({
    labels,
    datasets: [
      // this previous month reports
      {
        label: "previous month",
        // user information of previous month
        data: [1, 2, 2, 4, ],
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgb(255,99,132,0.5)",
      },
      // this month report
      {
        label: "this month",
        // user information of this month
        data: [1, 2 ,3, 4,],
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgb(53,162,235,0.5)",
      },
    ],
  });
  useEffect(() => {
    const fetchData = () => {
      const url = `https://jsonplaceholder.typicode.com/comments`;
      const dataset1 = [];
      const dataset2 = [];

      fetch(url, {
        method: "get",
      })
        .then((data) => {
          console.log(data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log(res);
          for (const val of res) {
            dataset1.push(val.id);
            dataset2.push(val.postId);
          }
          setdata({
            labels: ["1st week", "2st week", "3st week", "4st week"],
            datasets: [
              {
                label: "This month",
                data: dataset1,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(99, 132, 0.5)",
              },
              {
                label: "Previous Month",
                data: dataset2,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba",
              },
            ],
          });
          console.log(dataset1, dataset2);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchData();
  }, []);
  return <Bar data={data} options={options} />;
};

export default SalesCharts;
