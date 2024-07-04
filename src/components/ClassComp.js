import React from "react";
class ClassComp extends  React.Component {
    constructor(props){
        super(props);
        this.car="MAYBACH";
    }
    render() {
      return (<div>
        CAR ON DISPLAY IS: {this.car} from {this.props.carName} <br/>
      </div>
      );
    }
}
    export  default ClassComp;