import React from 'react'
import './Home.css'
import { Timer } from '../Timer/Timer'
import { Header } from '../Header/Header'
import { Contact } from '../Contact/Contact'
import { About } from '../About/About'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


export const Home = () => {
  return (
    <>
    <div className="mainHome">
    <Router>
        <Header/>

        <Routes>

          <Route exact path='/' element={<Timer/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>

        </Routes>

      </Router>
    </div>
    </>
  )
}
