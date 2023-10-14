<template>
  <div class="dashboard">
    <div class="dashboard-content">
      <div class="dashboard-card">
        <div class="card-header">
          <h3>Sales Statistics</h3>
        </div>
        <div class="card-body row">
          <!-- Placeholder for sales statistics chart -->
          <div class="col-md-6 col-6 col-sm-12 col-12 charty">
            <canvas id="myChart"> </canvas>
          </div>
          <div class="col-md-6 col-6 col-sm-12 col-12 charty">
            <canvas id="productionChart"></canvas>
          </div>

          <div class="col-md-6 col-lg-4 col-sm-12 col-12 charty">
            <canvas id="polarchart"></canvas>
          </div>
          <div class="col-md-6 col-lg-4 col-sm-12 col-12 charty">
            <canvas id="donutChart"></canvas>
          </div>
          <div class="col-md-6 col-lg-4 col-sm-12 col-12 charty">
            <canvas id="pieChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardOne",
  mounted() {
    const xValues = [
      50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 155, 155, 160,
    ];
    const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15, 16, 17, 18, 19, 20];

    // Line Chart
    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(220, 220, 220, 1.0)",
            borderColor: "rgba(118, 216, 221, 1.0)",
            data: yValues,
          },
        ],
      },
      options: {
        title: {
          color: "black",
          fontSize: 24,
          display: true,
          text: "Sales Statistics",
        },
      },
      scales: {
        yAxes: [{ ticks: { min: 6, max: 30 } }],
      },
    });

    var contries = ["Italy", "France", "Spain", "USA", "Argentina"];
    var production = [55, 49, 44, 24, 15];
    var barColors = [
      "rgba(118, 216, 221, 1.0)",
      "rgba(118, 216, 221, 1.0)",
      "rgba(118, 216, 221, 1.0)",
      "rgba(118, 216, 221, 1.0)",
      "rgba(118, 216, 221, 1.0)",
    ];

    // Bar chart
    new Chart("productionChart", {
      type: "bar",
      data: {
        labels: contries,
        datasets: [
          {
            backgroundColor: barColors,
            data: production,
          },
        ],
      },
      options: {
        legend: { display: true },
        title: {
          color: "black",
          fontSize: 24,
          display: true,
          text: "Bar Chart",
        },
      },
    });

    // polar chart
    new Chart("polarchart", {
      type: "polarArea",
      data: {
        type: "polarArea",
        labels: [
          "Fashion",
          "Electronics",
          "Home Decore",
          "Furniture",
          "Jewellry",
        ],
        datasets: [
          {
            label: "My First Dataset",
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(255, 205, 86)",
              "rgb(201, 203, 207)",
              "rgb(54, 162, 235)",
            ],
          },
        ],
      },
      options: {
        legend: { display: true },
        title: {
          color: "black",
          fontSize: 24,
          display: true,
          text: "Polar Area Chart",
        },
      },
    });

    new Chart("donutChart", {
      type: "doughnut",
      data: {
        labels: [
          "Fashion",
          "Furniture",
          "Jewellry",
          "Cosmetics",
          "Home-Decore",
        ],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100, 220, 190],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(205, 205, 186)",
              "rgb(155, 115, 186)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        legend: { display: true },
        title: {
          color: "black",
          fontSize: 24,
          display: true,
          text: "Doughnut Chart",
        },
      },
    });

    // Pie Chart
    new Chart("pieChart", {
      type: "pie",
      data: {
        labels: ["Fashion", "Furniture", "Jewellry", "Cosmetics"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100, 190],
            backgroundColor: [
              "rgb(255, 109, 142)",
              "rgb(94, 202, 235)",
              "rgb(255, 205, 86)",
              "rgb(155, 115, 186)",
            ],
            hoverOffset: -10,
          },
        ],
      },
      options: {
        legend: { display: true },
        title: {
          color: "black",
          fontSize: 24,
          display: true,
          text: "Pie Chart",
        },
      },
    });
  },
  methods: {},
};
</script>

<style scoped>
#productionChart,
#myChart {
  width: 100%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
}
.dashboard {
  width: 100%;
  margin: 0;
  padding: 20px;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 20px;
}

.dashboard-card {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 20px;
}

.card-header {
  background: #007bff;
  color: #fff;
  padding: 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.card-header h3 {
  margin: 0;
  font-size: 18px;
}

.card-body {
  padding: 20px;
}

.charty {
  padding: 10px;
  width: fit-content;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.task-list li {
  margin-bottom: 10px;
}

.interaction-feed {
  list-style: none;
  padding: 0;
  margin: 0;
}

.interaction-feed li {
  margin-bottom: 5px;
}
</style>
