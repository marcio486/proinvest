import React, { PureComponent } from 'react';
import {
  Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea,
} from 'recharts';

const data = [
  { name: 1, cost: 4.11},
  { name: 2, cost: 2.39},
  { name: 3, cost: 1.37},
  { name: 4, cost: 1.16},
  { name: 5, cost: 2.29 },
  { name: 6, cost: 3 },
  { name: 7, cost: 0.53 },
  { name: 8, cost: 2.52 },
  { name: 9, cost: 1.79 },
  { name: 10, cost: 2.94 },
  { name: 11, cost: 4.3 },
  { name: 12, cost: 4.41 },
  { name: 13, cost: 2.1 },
  { name: 14, cost: 8 },
  { name: 15, cost: 0 },
  { name: 16, cost: 9 },
  { name: 17, cost: 3 },
  { name: 18, cost: 2},
  { name: 19, cost: 3 },
  { name: 20, cost: 7 },
];

const getAxisYDomain = (from, to, ref, offset) => {
  const refData = data.slice(from - 1, to);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

const initialState = {
  data,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  top2: 'dataMax+20',
  bottom2: 'dataMin-20',
  animation: true,
  difference : 0,
};

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nhpemhgs/';

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  calculaEvento() {
      console.log(this.state.data[this.state.refAreaLeft-1].cost,this.state.data[this.state.refAreaRight-1].cost)
      
      this.setState({
          difference : this.state.data[this.state.refAreaRight-1].cost/this.state.data[this.state.refAreaLeft-1].cost
        })
      this.setState({ refAreaLeft: '' })
      
  }

  zoomOut() {
    const { data } = this.state;
    this.setState(() => ({
      data: data.slice(),
      refAreaLeft: '',
      refAreaRight: '',
      left: 'dataMin',
      right: 'dataMax',
      top: 'dataMax+1',
      bottom: 'dataMin',
      top2: 'dataMax+50',
      bottom2: 'dataMin+50',
    }));
  }

  render() {
    const {
      data, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom, top2, bottom2,
    } = this.state;

    return (
      <div className="highlight-bar-charts" style={{ userSelect: 'none' }}>
        <button
          // href="javascript: void(0);"
          className="btn update"
          onClick={this.zoomOut.bind(this)}
        >
          Zoom Out

        </button>

        <LineChart
          width={800}
          height={400}
          data={data}
          onMouseDown={e => this.setState({ refAreaLeft: e.activeLabel })}
          onMouseMove={e =>  this.state.refAreaLeft && this.setState({ refAreaRight: e.activeLabel })}
          onMouseUp={e => this.calculaEvento()}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            allowDataOverflow
            dataKey="name"
            domain={[left, right]}
            type="number"
          />
          <YAxis
            allowDataOverflow
            domain={[bottom, top]}
            type="number"
            yAxisId="1"
          />
          <YAxis
            orientation="right"
            allowDataOverflow
            domain={[bottom2, top2]}
            type="number"
            yAxisId="2"
          />
          <Tooltip />
          <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
          <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300} />

          {
            (refAreaLeft && refAreaRight) ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />) : null
            }
        </LineChart>
            <span>Diferença {this.state.difference}</span>
      </div>
    );
  }
}
