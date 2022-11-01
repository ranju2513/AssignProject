import React, { Component } from 'react'
import navbar from './navbar/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import contactapp from './Contact/contactapp'

 class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <navbar />
           </Router>
           <Routes>
          <Route path="/Contact" element={<contactapp />} />
           </Routes>
      </div>
    )
  }
}

export default App




