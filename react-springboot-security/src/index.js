import React from 'react';
import { Navigate } from "react-router";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import AuthenticationService from './service/AuthenticationService';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
		<Routes>
			<Route exact path='/' element={ AuthenticationService.isUserLoggedin() ? <Home/> : <Navigate replace to={"/login"}/> } />
			<Route exact path='/login' element={ <Login/> } />
		</Routes>
	</Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
