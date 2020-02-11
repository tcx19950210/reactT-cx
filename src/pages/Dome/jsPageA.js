import React, { Fragment } from "react";
import QueueAnim from "rc-queue-anim";
import { listMokey } from "../../axios/interface";

import "./index.less";

class JsPageA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.gowechatId()
    listMokey({}).then(res => {
      //  const jsObj4 = JSON.parse(res);
      console.log(res);
    });
    let mycar = { make: "Honda", model: "Accord", year: 1998 };
    for (var p in mycar) {
      console.log(p + ": " + mycar[p]);
    }
  }

  goScroll = () => {
    this.props.history.push("/scroll");
  };

  goQueueAnim = () => {
    this.props.history.push("/QueueAnim");
  };

  render() {
    const { textLoss, wechatId } = this.state;
    return (
      <Fragment>
        <div style={{ textAlign: "center", lineHeight: 5 }}>路由导航</div>
        <QueueAnim delay={300} className="queue-simple">
          <div onClick={this.goScroll} key="a">
            css3实现走马灯
          </div>
          <div onClick={this.goQueueAnim} key="b">
            QueueAnim进出场动画
          </div>
          <div key="c">Queue Demo</div>
          <div key="d">Queue Demo</div>
        </QueueAnim>
      </Fragment>
    );
  }
}

export default JsPageA;
