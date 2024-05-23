import { useState } from 'react'

import './App.css'
import { About } from './Components/About'
import { Links } from './Components/Links'
import { Portrait } from './Components/Portrait'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="app">
<div className="slider-thumb">

<div className="container">
    <div className="row">
      
      <div className="col-4"><About/></div>
      <div className="col-4"><Portrait/></div>
      <div className="col-4"><Links/></div>
    </div>
  </div>

  </div>

       
   </div> 



        
    
  )
}

export default App
