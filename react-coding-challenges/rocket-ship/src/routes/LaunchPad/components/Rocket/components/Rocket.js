import React, { useState, Component } from "react";
import RocketCore from "./RocketCore";

function FunctionalRocket() {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} rocketName={'Functional Rocket'} />;
}

// solution : use memo
export const MemoFunctionalRocket = React.memo(FunctionalRocket);

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now(),
    };
  }

  //solution : use shouldComponentUpdate lifecycle
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate lifecycle");

    return false;
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} rocketName={'class Rocket'}/>;
  }
}
