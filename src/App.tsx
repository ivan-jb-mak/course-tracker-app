import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
