import React, { Component } from 'react'

export class SampleClassComponent extends Component {
    constructor(props){
        super(props);
        this.state={counter:0,age:28}
    }

     IncrementAge=()=>{
        this.setState({age:this.state.age+2})
    }

    DecrementAge=()=>{
      this.setState({age:this.state.age-2})
  }

    stopwatch=()=>{
      this.timer=setInterval(()=>{this.setState({counter:this.state.counter+1})},1000)
    }
    
    stoptimer=()=>{
      clearInterval(this.timer);
    }
  render() {

    return (
      <div>
        You clicked {this.state.counter} times.<br></br>
        <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>Increment</button><br></br>
        Age:{this.state.age}<br></br>
        <button onClick={this.IncrementAge}>Increment</button><br></br>
        <button onClick={this.DecrementAge}>Decrement</button><br></br><br></br><br></br>
        stopwatch:{this.state.counter}<br></br>
        <button onClick={this.stopwatch}>Stopwatch</button><br></br>
        <button onClick={this.stoptimer}>Stop Timer</button>
      </div>
    )
  }
}

export default SampleClassComponent
