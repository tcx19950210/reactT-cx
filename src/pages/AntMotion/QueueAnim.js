//QueueAnim进出场动画Star334 通过简单的配置对一组元素添加串行的进场动画效果。具体参数请参见 API
import React, { Fragment, Component } from "react";
import QueueAnim from "rc-queue-anim";
import "./index.less";
import { Button } from "antd-mobile";

class QueueAnims extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  componentWillMount() {}

  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <Fragment>
        <div banner className="bus_tcx_a" onClick={this.onClick}>
          点击展示过度动画
        </div>
        <QueueAnim type={["right", "left"]} className="demo-content">
          {this.state.show
            ? [
                <div key="banner" className="bus_tcx_b">
                  <img src="http://www.tangchenxu.top/images/1.jpg" alt="" />
                </div>,
                <QueueAnim className="demo-page" key="page" type="bottom">
                  <img
                    key="page1"
                    src="http://www.tangchenxu.top/images/2.jpg"
                    alt=""
                  />
                  <img
                    key="page2"
                    src="http://www.tangchenxu.top/images/3.jpg"
                    alt=""
                  />
                  <img
                    key="page3"
                    src="http://www.tangchenxu.top/images/4.jpg"
                    alt=""
                  />
                </QueueAnim>,

                <div banner className="bus_tcx_c" key="footer"></div>
              ]
            : null}
        </QueueAnim>
      </Fragment>
    );
  }
}

export default QueueAnims;
