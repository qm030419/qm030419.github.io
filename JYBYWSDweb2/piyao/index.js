document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector("#anonymous");
  const checkIcon = checkbox.nextElementSibling.nextElementSibling;
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkIcon.classList.remove("hidden");
    } else {
      checkIcon.classList.add("hidden");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const chartDom = document.getElementById("rumor-trend-chart");
  const myChart = echarts.init(chartDom);
  const option = {
    animation: false,
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderColor: "#eee",
      borderWidth: 1,
      textStyle: {
        color: "#1f2937",
      },
    },
    legend: {
      data: ["谣言数量", "辟谣数量"],
      textStyle: {
        color: "#1f2937",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["1月", "2月", "3月", "4月", "5月", "6月"],
      axisLine: {
        lineStyle: {
          color: "#ddd",
        },
      },
      axisLabel: {
        color: "#1f2937",
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#ddd",
        },
      },
      axisLabel: {
        color: "#1f2937",
      },
      splitLine: {
        lineStyle: {
          color: "#eee",
        },
      },
    },
    series: [
      {
        name: "谣言数量",
        type: "line",
        smooth: true,
        lineStyle: {
          width: 3,
          color: "rgba(252, 141, 98, 1)",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(252, 141, 98, 0.2)",
              },
              {
                offset: 1,
                color: "rgba(252, 141, 98, 0.05)",
              },
            ],
          },
        },
        symbol: "none",
        data: [45, 52, 38, 64, 58, 50],
      },
      {
        name: "辟谣数量",
        type: "line",
        smooth: true,
        lineStyle: {
          width: 3,
          color: "rgba(87, 181, 231, 1)",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(87, 181, 231, 0.2)",
              },
              {
                offset: 1,
                color: "rgba(87, 181, 231, 0.05)",
              },
            ],
          },
        },
        symbol: "none",
        data: [30, 42, 35, 59, 56, 48],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
});
