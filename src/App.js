import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import DetailOne from './components/DetailOne'
import Bag from './components/Bag';
import SignUp from './components/SignUp'
import ProductTwo from './components/ProductTwo'
import DetailTwo from './components/DetailTwo'
import NewsFeed from './components/NewsFeed'
import Product from './components/Product'
import Slider from './components/Slider'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Bag/>
      <Switch>
        <Route exact path='/'>
          <Slider/>
          <Product/>
          <ProductTwo/>
        </Route>
        <Route path='/detailone/:id'>
          <DetailOne/>
        </Route>
        <Route path='/detailtwo/:id'>
          <DetailTwo/>
        </Route>
        <Router path='/signup'>
          <SignUp/>
        </Router>
        <Route path='/newsfeed'>
          <NewsFeed/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App;
