
import React from "react";
import { HashRouter as Router, Route, Picker } from "react-router-dom";
import index from "./pages/home";
import JsPageA from '../src/pages/Dome/jsPageA'
import Login from '../src/pages/login/login'
import Scroll from '../src/pages/login/scroll'
import QueueAnim from '../src/pages/AntMotion/QueueAnim'


// BrowserRouter
class App extends React.Component {
  render() {
    return (
      <Router >
        <Route exact path="/" component={JsPageA} />
        <Route path="/login" component={Login} />
        <Route path="/scroll" component={Scroll} />
        <Route path="/queueAnim" component={QueueAnim} />
        {/* <Route exact path="/activationPage" component={ActivationPage} />
        <Route path="/paysuccess" component={paysuccess} /> */}
      </Router>
    );
  }
}
export default App;
