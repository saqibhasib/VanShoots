import './App.css';
import Sidebar from './components/Sidebar';
import Login from "./pages/login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const LoginRoute = () => (
  <div>
    <Route exact path="/" component={Login}/>
    <Route exact path="/login" component={Login}/>
  </div>
)

const MainRoutes = () => (
  <Sidebar />
  
)

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginRoute}/>
        <Route exact path="/login" component={LoginRoute}/>
        <Route component={MainRoutes}/>  
      </Switch>
      </Router> 
  );
}

export default App;
