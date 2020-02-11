import React, { Fragment, Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./index.css";

class Login extends Component {
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
        <ul className="lun">
          <li>
            <img src="http://www.tangchenxu.top/images/1.jpg"></img>
          </li>
          <li>
            <img src="http://www.tangchenxu.top/images/2.jpg"></img>
          </li>
          <li>
            <img src="http://www.tangchenxu.top/images/3.jpg"></img>
          </li>
          <li>
            <img src="http://www.tangchenxu.top/images/4.jpg"></img>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Login;
