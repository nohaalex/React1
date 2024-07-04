import React, { Component } from 'react';

 class Timer extends Component {
    constructor(props) {
        super(props);
        this.state={count:0}
        console.log("The constructor has been called");
    }
    componentDidMount(){
        console.log("The ComponenetDidMount has been called");
        this.StartTimer();
    }


    componentDidUpdate(prevprops,prevstate){
        console.log("The ComponentDidUpdate has been called");
        // if(prevstate!==this.state.count)
        // this.StartTimer();
    }

   

    StartTimer=()=>{
        this.timer=setInterval(()=>{this.setState({count:this.state.count+1})},1000)
    }

    componentWillUnmount(){
        console.log("The ComponentWillUnmount has been called");
        this.StopTimer();
    }

    StopTimer=()=>{
        clearInterval(this.timer);
    }

  render() {
    console.log("The render method called");
    return (
      <div>
        Timer
        <p> COUNT:{this.state.count}</p>
        <button onClick={this.props.onUnmount}>Unmount</button>
      </div>
    )
  }
}

export default Timer
