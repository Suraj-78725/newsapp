
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (

      <div>
        <Router>
          <Navbar/> 
          {/* <News pageSize={10} country={"us"} category={'sport'} /> */}
          <Routes>
              <Route exact path="/"element={<News key="general" pageSize={20} country={"in"} category={'general'}/>}/>
              <Route exact path="/business" element={<News key="business" pageSize={20} country={"in"} category={'business'} header="News Busines"/>}/>
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={20} country={"in"} category={'entertainment'}  header="News Entertainment"/>}/>
              <Route exact path="/general"  element={<News key="general" pageSize={20} country={"in"} category={'general'}  header="News General"/>}/>
              <Route exact path="/health"element={<News key="health" pageSize={20} country={"in"} category={'health'}  header="News Health"/>}/>
              <Route exact path="/science" element={<News key="science" pageSize={20} country={"in"} category={'science'}  header="News Science"/>}/>
              <Route exact path="/sports" element={<News key="genersportsal" pageSize={20} country={"in"} category={'genersportsal'}  header="News Sport"/>}/>
              <Route exact path="/technology" element={<News key="technology" pageSize={20} country={"in"} category={'technology'}  header="News Tech"/>}/>
              </Routes>
          </Router>
      </div>
    )
  }
}
