import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from './Components/Hero'
import MajorLanding from './Components/MajorLanding'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
        //the : by major name lets us use the hook useParams and gets the info from the
        return (
          <BrowserRouter>
            <div className="App">
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/majors/:majorName" element={<MajorLanding />} />
              </Routes>
            </div>
          </BrowserRouter>
        );
      }
      

export default App
