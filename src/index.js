import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter.js'


class App extends React.Component {
  render() {
    return (
      <Counter />
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('container')
);
