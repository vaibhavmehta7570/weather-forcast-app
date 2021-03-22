import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Counter from './task1/components/counter'
import WeatherApp from './task2/components/WeatherApp'
import Navbar from './navbar'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/counter'>
            <Counter />
          </Route>
          <Route path='/weatherapp'>
            <WeatherApp />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  )
}

export default App
