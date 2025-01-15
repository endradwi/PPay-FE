import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function FinancialChart() {
  // Data dummy
  const balanceData = [
    { date: "2023-01-01", balance_in: 1000, balance_out: 500 },
    { date: "2023-01-02", balance_in: 1200, balance_out: 700 },
    { date: "2023-01-03", balance_in: 1500, balance_out: 800 },
    { date: "2023-01-04", balance_in: 1300, balance_out: 600 },
  ];

  const data = {
    labels: balanceData.map((item) =>
      new Date(item.date).toLocaleDateString("en-US", { month: "long", day: "numeric" })
    ),
    datasets: [
      {
        label: "Income",
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: balanceData.map((item) => item.balance_in),
      },
      {
        label: "Expense",
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: balanceData.map((item) => item.balance_out),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Income and Expense",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default FinancialChart;
