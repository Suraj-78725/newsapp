
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {
  apikey= process.env.REACT_APP_NEWS_API
  state={
    progress:10
  }
  setProgress=(progress)=>
  {
    this.setState({progress:progress})

  }
  render() {
    return (

      <div>
        <Router>
          <Navbar/> 
          {/* <News setProgress={this.setProgress} apikey={this.apikey}pageSize={10} country={"us"} category={'sport'} /> */}
          <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          />
          <Routes>
            
              <Route exact path="/"element={<News setProgress={this.setProgress} apikey={this.apikey}key="general" pageSize={20} country={"in"} category={'general'}/>}/>
              <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey}key="business" pageSize={20} country={"in"} category={'business'} header="News Busines"/>}/>
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}key="entertainment" pageSize={20} country={"in"} category={'entertainment'}  header="News Entertainment"/>}/>
              <Route exact path="/general"  element={<News setProgress={this.setProgress} apikey={this.apikey}key="general" pageSize={20} country={"in"} category={'general'}  header="News General"/>}/>
              <Route exact path="/health"element={<News setProgress={this.setProgress} apikey={this.apikey}key="health" pageSize={20} country={"in"} category={'health'}  header="News Health"/>}/>
              <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey}key="science" pageSize={20} country={"in"} category={'science'}  header="News Science"/>}/>
              <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey}key="genersportsal" pageSize={20} country={"in"} category={'genersportsal'}  header="News Sport"/>}/>
              <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey}key="technology" pageSize={20} country={"in"} category={'technology'}  header="News Tech"/>}/>
              </Routes>
          </Router>
      </div>
    )
  }
}
