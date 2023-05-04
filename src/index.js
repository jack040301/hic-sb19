import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Profile from './views/profile'
import Home from './views/home'
import BlogPost from './views/blog-post'
import JProfile from './views/josh-profile'
import sProfile from './views/stell-profile'
import KProfile from './views/ken-profile'
import JDProfile from './views/justin-profile'
import pProfile from './views/pablo-profile'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={JProfile} exact path="/josh-profile"a />
        <Route component={sProfile} exact path="/stell-profile" />
        <Route component={pProfile} exact path="/pablo-profile" />
        <Route component={KProfile} exact path="/ken-profile" />
        <Route component={JDProfile} exact path="/justin-profile" /> 
        <Route component={Profile} exact path="/profile" />
        <Route component={Home} exact path="/" />
        <Route component={BlogPost} exact path="/developers" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
