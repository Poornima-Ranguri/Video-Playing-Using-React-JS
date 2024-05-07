import {Component} from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

import ReactPlayer from 'react-player'

import './index.css'

const videoURL = 'https://youtu.be/YE7VzlLtp-4'

const data = [
  {
    group_name: 'Group A',
    boys: 200,
    girls: 400,
  },
  {
    group_name: 'Group B',
    boys: 3000,
    girls: 500,
  },
  {
    group_name: 'Group C',
    boys: 1000,
    girls: 1500,
  },
  {
    group_name: 'Group D',
    boys: 700,
    girls: 1200,
  },
]

const pieChartData = [
  {
    count: 809680,
    language: 'Telugu',
  },
  {
    count: 4555697,
    language: 'Hindi',
  },
  {
    count: 12345657,
    language: 'English',
  },
]

class BarChartTesting extends Component {
  state = {
    isPlaying: false,
  }

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  render() {
    const {isPlaying} = this.state
    const btnText = isPlaying ? 'Pause' : 'Play'

    return (
      <div className="home-container">
        <p>BAR CHART, PIE CHART AND VIDEO PLAYER</p>
        <div className="bar-chart-container">
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={data}
              margin={{
                top: 5,
              }}
            >
              <XAxis
                dataKey="group_name"
                tick={{
                  stroke: 'gray',
                  strokeWidth: 1,
                }}
              />
              <YAxis
                tickFormatter={this.DataFormatter}
                tick={{
                  stroke: 'gray',
                  strokeWidth: 0,
                }}
              />
              <Legend
                wrapperStyle={{
                  padding: 30,
                }}
              />
              <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
              <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="pie-chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                cx="70%"
                cy="40%"
                data={pieChartData}
                startAngle={0}
                endAngle={360}
                innerRadius="40%"
                outerRadius="70%"
                dataKey="count"
              >
                <Cell name="Telugu" fill="#fecba6" />
                <Cell name="Hindi" fill="#b3d23f" />
                <Cell name="English" fill="#a44c9e" />
              </Pie>
              <Legend
                iconType="circle"
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="video-container">
          <h1 className="heading">Video Player</h1>
          <div className="responsive-container">
            <ReactPlayer url={videoURL} playing={isPlaying} />
          </div>
          <button type="button" className="button" onClick={this.onClickPlay}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default BarChartTesting
