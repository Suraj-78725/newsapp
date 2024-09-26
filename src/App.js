
import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


const App =()=> {
  const apikey= process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(10)

    return (

      <div>
        <Router>
          <Navbar/> 
          {/* <News setProgress={this.setProgress} apikey={this.apikey}pageSize={10} country={"us"} category={'sport'} /> */}
          <LoadingBar
          color='#f11946'
          progress={progress}
          />
          <Routes>
            
              <Route exact path="/"element={<News setProgress={setProgress} apikey={apikey}key="general" pageSize={20} country={"us"} category={'general'}/>}/>
              <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey}key="business" pageSize={20} country={"us"} category={'business'} header="News Busines"/>}/>
              <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey}key="entertainment" pageSize={20} country={"us"} category={'entertainment'}  header="News Entertainment"/>}/>
              <Route exact path="/general"  element={<News setProgress={setProgress} apikey={apikey}key="general" pageSize={20} country={"us"} category={'general'}  header="News General"/>}/>
              <Route exact path="/health"element={<News setProgress={setProgress} apikey={apikey}key="health" pageSize={20} country={"us"} category={'health'}  header="News Health"/>}/>
              <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey}key="science" pageSize={20} country={"us"} category={'science'}  header="News Science"/>}/>
              <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey}key="genersportsal" pageSize={20} country={"us"} category={'genersportsal'}  header="News Sport"/>}/>
              <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey}key="technology" pageSize={20} country={"us"} category={'technology'}  header="News Tech"/>}/>
              </Routes>
          </Router>
      </div>
    )

}

export default App