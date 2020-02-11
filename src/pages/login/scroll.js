import React, { Fragment, Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import QueueAnim from 'rc-queue-anim';
import "./index.css";

class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // console.log("组件马上就要加载了");
  }

  handleImageChange = e => {};

  okapp = () => {};

  render() {
    return (
      <Fragment>
        <ul className='tcx2'>
          <li>赵</li>
          <li>钱</li>
          <li>孙</li>
          <li>李</li>
          <li>周</li>
          <li>吴</li>
          <li>郑</li>
        </ul>
      </Fragment>
    );
  }
}

export default Scroll;
