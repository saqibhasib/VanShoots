import './App.css';
import Sidebar from './components/Sidebar';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        
      </Switch>
    </Router> 
  );
}

export default App;
