import { incomeAtom, expenseAtom } from "../jotai/data.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useAtom } from "jotai";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function FinancialChart() {
  const [incomeAtomValue] = useAtom(incomeAtom);
  const [expenseAtomValue] = useAtom(expenseAtom);

  const incomeNumber = parseInt(incomeAtomValue?.toString(), 10) || 0;
  const expenseNumber = parseInt(expenseAtomValue?.toString(), 10) || 0;
  // Data dummy
  const balanceData = [
    {
      date: "2023-01-01",
      balance_in: incomeNumber,
      balance_out: expenseNumber,
    },
    { date: "2023-02-02", balance_in: 0, balance_out: 0 },
    { date: "2023-03-03", balance_in: 0, balance_out: 0 },
    { date: "2023-04-04", balance_in: 0, balance_out: 0 },
  ];

  const data = {
    labels: balanceData.map((item) =>
      new Date(item.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      })
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
