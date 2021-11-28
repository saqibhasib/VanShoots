import './App.css';
import Sidebar from './components/Sidebar';
import Login from "./pages/login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
          <Route exact path="/" component={Login}/>
      </Switch>
      </Router> 
  );
}

export default App;
