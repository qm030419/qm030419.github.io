document.addEventListener("DOMContentLoaded", function () {
  // 违规类型统计图表
  const violationTypeChart = echarts.init(
    document.getElementById("violation-type-chart")
  );
  const violationTypeOption = {
    animation: false,
    title: {
      text: "违规类型分布",
      left: "center",
      textStyle: {
        color: "#1f2937",
      },
    },
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderColor: "#e5e7eb",
      textStyle: {
        color: "#1f2937",
      },
    },
    legend: {
      orient: "vertical",
      right: 10,
      top: "center",
      textStyle: {
        color: "#1f2937",
      },
    },
    series: [
      {
        name: "违规类型",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: "bold",
            color: "#1f2937",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 35,
            name: "无资质办学",
            itemStyle: { color: "rgba(87, 181, 231, 1)" },
          },
          {
            value: 28,
            name: "超范围办学",
            itemStyle: { color: "rgba(141, 211, 199, 1)" },
          },
          {
            value: 22,
            name: "虚假宣传",
            itemStyle: { color: "rgba(251, 191, 114, 1)" },
          },
          {
            value: 15,
            name: "价格违规",
            itemStyle: { color: "rgba(252, 141, 98, 1)" },
          },
        ],
      },
    ],
  };
  violationTypeChart.setOption(violationTypeOption);
  // 地区分布统计图表
  const regionDistributionChart = echarts.init(
    document.getElementById("region-distribution-chart")
  );
  const regionDistributionOption = {
    animation: false,
    title: {
      text: "各地区曝光数量统计",
      left: "center",
      textStyle: {
        color: "#1f2937",
      },
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderColor: "#e5e7eb",
      textStyle: {
        color: "#1f2937",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["北京", "上海", "广东", "江苏", "浙江", "四川", "湖北", "山东"],
      axisLine: {
        lineStyle: {
          color: "#d1d5db",
        },
      },
      axisLabel: {
        color: "#1f2937",
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: "#1f2937",
      },
      splitLine: {
        lineStyle: {
          color: "#e5e7eb",
        },
      },
    },
    series: [
      {
        name: "曝光数量",
        type: "bar",
        barWidth: "60%",
        data: [42, 38, 56, 34, 29, 31, 25, 27],
        itemStyle: {
          color: "rgba(87, 181, 231, 1)",
          borderRadius: 4,
        },
      },
    ],
  };
  regionDistributionChart.setOption(regionDistributionOption);
  // 窗口大小变化时重新调整图表大小
  window.addEventListener("resize", function () {
    violationTypeChart.resize();
    regionDistributionChart.resize();
  });
});
