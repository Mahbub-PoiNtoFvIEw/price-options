import { BarChart, PieChart, Bar, LineChart as LC, Line, XAxis, YAxis, Tooltip, Legend,
    CartesianGrid,Pie } from "recharts";

const LineChart = () => {
  const studentMarks = [
    { id: 1, name: "Ali", math: 85, english: 78, physics: 88 },
    { id: 2, name: "Sara", math: 72, english: 81, physics: 75 },
    { id: 3, name: "Ravi", math: 90, english: 87, physics: 92 },
    { id: 4, name: "Mina", math: 65, english: 70, physics: 68 },
    { id: 5, name: "Omar", math: 78, english: 76, physics: 80 },
    { id: 6, name: "Lina", math: 88, english: 84, physics: 89 },
    { id: 7, name: "Zara", math: 95, english: 92, physics: 94 },
    { id: 8, name: "Ayan", math: 70, english: 68, physics: 72 },
    { id: 9, name: "Noor", math: 82, english: 79, physics: 85 },
    { id: 10, name: "Hadi", math: 77, english: 74, physics: 81 },
  ];
  return (
    <div className=" mb-8">
      <LC width={500} height={400} data={studentMarks}>
        <XAxis dataKey={"name"}></XAxis>

        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="english" stroke="green"></Line>
        <Line dataKey="physics" stroke="blue"></Line>
        <YAxis></YAxis>
        <Tooltip />
      </LC>
      <BarChart width={600} height={300} data={studentMarks}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="math" fill="#8884d8" barSize={10} />
        <Bar dataKey="english" fill="#8884d8" barSize={10} />
        <Bar dataKey="physics" fill="#8884d8" barSize={10} />
      </BarChart>
      <PieChart width={400} height={400}>
          <Pie data={studentMarks} dataKey="math" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={studentMarks} dataKey="english" cx="50%" cy="50%" innerRadius={80} outerRadius={90} fill="#82ca9d" label />
          <Pie data={studentMarks} dataKey="physics" cx="50%" cy="50%" innerRadius={100} outerRadius={110} fill="#82ca9d" label />
          <Tooltip />
        </PieChart>
    </div>
  );
};

export default LineChart;
