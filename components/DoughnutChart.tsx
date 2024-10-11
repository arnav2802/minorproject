'use-client'
import { Doughnut } from "react-chartjs-2"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets:[{
            label: 'Banks',
            data: ['#0747b6','#2265db','#2f91fa'],
            backgroundColor: ['']
        }]
    }
  return (
    <Doughnut data={} />
  )
}

export default DoughnutChart