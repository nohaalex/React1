import React, { Component } from 'react'
import Timer from './Timer'

class Main_page extends Component {
    constructor(props) {
        super(props);
        this.state={isVisible:true}
     
    }

    unmountComponent=()=>{
        this.setState({isVisible:!this.state.isVisible})
    }
  render() {
    return (
      <div>
        {this.state.isVisible? <Timer onUnmount={this.unmountComponent}/> : <h1>Timer Unmounted</h1> }
        
      </div>
    )
  }
}

export default Main_page
