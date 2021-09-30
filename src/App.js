import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Title from "./Components/Title";
import Avatar from "./Components/Avatar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"


function App() {


  return (
    <Router>
      <div className="bg-circles h-screen w-full bg-center bg-no-repeat bg-cover bg-blue-100 bg-opacity-70 flex font-roboto antialiased">
        <div className="w-full flex">
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/avatar" component={Avatar} />
          </Switch>
          <Title />
        </div>
      </div>
    </Router>
  );
}

export default App;
