import { DONUT_CHART_COLORS } from '@/GlobalStyles'

export const getDonutChartData = ({
  labels,
  data,
}: {
  labels: any[]
  data: any[]
}) => {
  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor: DONUT_CHART_COLORS,
      },
    ],
  }
}
