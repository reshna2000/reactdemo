import { useState } from 'react'
import reactLogo from './assets/2.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="d1">
            <h2 class="t">REGISTER HERE</h2>
            <form action="" method="get">
            <div className="c1">
                <label for="Name">Name:</label><br/>
                <input type="text" id="Name" class="form-control" placeholder="Name" required/>
            </div>
            <div className="c2">
                <label for="Username">Phone no:</label>
                <input type="tel"  id="Username" class="form-control" pattern="[789][0-9]{9}"title="Enter only numbers" placeholder="phone no:" required/>
            </div>
            <div className="c3">
                <label for="Email">Email:</label>
                <input type="email" id="Email" class="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" required/>
            </div>
            <div className="c4">
                <label for="Password">Password:</label>
                <input type="password" id="Password" class="form-control" pattern=".{8,}" title="Eight or more characters" placeholder="Password" required/>
            </div>
            <div className="c5">
                <input type="submit" value="REGISTER"/>
            </div>
            </form>       
        </div>
    
        <div className="div2">
            <img src={reactLogo}/>
            <h3>Join us</h3>
            <p>Subscribe Easy Tutorials Youtube Channel 
                to watch more videos</p>
            <button className="button"> About Us</button>
        </div>
    </div> 
    </>
  )
}

export default App
