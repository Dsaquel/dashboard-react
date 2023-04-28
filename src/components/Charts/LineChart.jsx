import Chart from 'react-apexcharts'
import './lineChart.scss'
const LineChart = () => {
  const series = [
    {
      name: 'Heigh paid reach',
      data: [
        '110k',
        '100k',
        '147k',
        '123k',
        '103k',
        '125k',
        '106k',
        '149k',
        '104k',
        '106k',
        '149k',
        '133k',
      ],
    },
    {
      name: 'Med organic reach',
      data: [
        '54k',
        '61k',
        '58k',
        '54k',
        '52k',
        '77k',
        '77k',
        '87k',
        '50k',
        '50k',
        '50k',
        '50k',
      ],
    },
  ]

  const options = {
    chart: {
      id: 'basic-bar',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      strokeDashArray: 0,
      labels: {
        rotateAlways: false,
        hideOverlappingLabels: false,
        showDuplicates: true,
        trim: true,
        minHeight: 30,
        maxHeight: 120,
        offsetX: 0,
        offsetY: 0,
        style: {
          colors: '#8E8E8E',
          cssClass: 'apexcharts-xaxis-label',
        },
      },
      tooltip: {
        enabled: true,
      },
      crosshairs: {
        show: false,
      },
    },

    yaxis: {
      labels: {
        align: 'left',
        minWidth: 20,
        maxWidth: 160,
        offsetX: -17,
        offsetY: -10,
        style: {
          colors: '#8E8E8E',
        },
        formatter: (value) => {
          return `${value}k`
        },
      },
    },
    stroke: {
      width: [2, 2],
    },
    markers: {
      size: 5,
      hover: {
        size: undefined,
        sizeOffset: 0,
      },
      strokeWidth: 4,
      strokeColor: ['#FD1F9B', '#017EFA'],
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 6,
          fillColor: '#fff',
          strokeColor: '#FD1F9B',
          size: 10,
          shape: 'circle',
        },
        {
          seriesIndex: 1,
          dataPointIndex: 6,
          fillColor: '#fff',
          strokeColor: '#017EFA',
          size: 10,
          shape: 'circle',
        },
      ],
    },

    colors: ['#FD1F9B', '#017EFA'],
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },

    tooltip: {
      enabled: true,
      shared: true,
      inverseOrder: true,
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        const first = series[0][dataPointIndex]
        const second = series[1][dataPointIndex]

        return `<div class="tooltip"> 
          <div class="item">
            <span class="first">${first}k</span> 
            <span class="equal">:</span>
            <div class="mean"> High paid reach</div>
          </div>
          <div class="item">
            <span class="last">${second}k</span> 
            <span class="equal">:</span>
            <div class="mean"> Med organic reach<div></div>
        </div>`
      },
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
      items: {
        display: 'flex',
      },
    },
  }

  return (
    <Chart type="line" series={series} height={'300'} options={options}></Chart>
  )
}

export default LineChart
