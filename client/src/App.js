import './App.css'
import { Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Game from './components/Game'
import SignIn from './components/SignIn'

const App = () => {
  return (
    <div className="App">
      <Route path='/' exact component={SignIn} />
      <Route path='/home' exact component={Homepage} />
      <Route path='/play' exact component={Game} />
    </div>
  )
}

export default App
