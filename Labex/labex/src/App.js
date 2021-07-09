import React from 'react'
import ListTripsPage from './Pages/ListTripsPage';
import HomePage from './Pages/HomePage';
import ApplicationFormPage from './Pages/ApplicationFormPage';
import LoginPage from './Pages/LoginPage';
import CreateTripPage from './Pages/CreateTripPage';
import AdminHomePage from './Pages/AdminHomePage';
import TripDetailsPage from './Pages/TripDetailsPage';
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <switch>
    
      <Route exact path={"/"}>
      <HomePage />
      </Route>

      <Route exact path={"/trips/list"}>
       <ListTripsPage />
       </Route>

      <Route exact path={"/trips/application"}>
      <ApplicationFormPage/>
      </Route>

       <Route exact path={"/login"}>
       <LoginPage/>
       </Route>

       
       <Route exact path={"/admin/trips/create"}>
       <CreateTripPage />
       </Route>

       <Route exact path={"admin"}>
       <AdminHomePage/>
       </Route>
       
    
    </switch>
    </BrowserRouter>
  );  
}

export default App;
