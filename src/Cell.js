import React, {Component} from 'react'

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.value || 'F00'
    }
  }

  change = (event) => {
    this.setState({color: '#333'})
  }

  render() {
    return(
      <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.change}></div>
    )
  }
}