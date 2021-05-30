import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import Adduser from './components/users/Adduser';
import EditUser from './components/users/EditUser';
import View from './components/users/view';

function App() {
  return (
    
    <Router>

    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path = "/Contact" component={Contact}/>
        <Route exact path ="/users/add" component={Adduser}/>
        <Route exact path="/users/edit/:id" component={EditUser}/>
        <Route exact path="/users/view/:id" component={View}/>
               
        <Route component={NotFound}/>
      </Switch>
      
     </div> 


    </Router>
    );
}

export default App;
