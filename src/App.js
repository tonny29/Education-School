import logo from './logo.jpg';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';

import Services from './Components/Services/Services';


function App() {
  return (
    <div className="App">
      <img src={logo} className='App-logo'  alt="logo" />
      <Router>
       <Header></Header>
        <Switch>
          <Route exact path="/">
           <Services></Services>
          </Route>
          <Route path="/serviceDetail">
            <ServiceDetail></ServiceDetail>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
