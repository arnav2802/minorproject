'use client'
import { Doughnut } from "react-chartjs-2"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets:[{
            label: 'Banks',
            data: [1520,5200,3750],
            backgroundColor: ['#0747b6','#2265db','#2f91fa']
        }],
        labels: ['Bank 1','bank 2','Bank 3']
    }
  return (
    <Doughnut data={data} />
  )
}

export default DoughnutChart