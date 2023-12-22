import { useState } from "react"
import "./App.css"

function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className="container" style={{backgroundColor:color}}>
        
        <div className="item" >
          <button 
          onClick={() =>setColor("red")}
           className="btn" style={{backgroundColor:"red"}}>red
           </button>

          <button 
          onClick={()=>setColor("green")}
          className="btn" style={{backgroundColor:"green"}}>green
          </button>
          <button
          onClick={() => setColor("blue")}
          className="btn" style={{backgroundColor:"blue"}}>blue
          </button>
          <button
          onClick={() => setColor("yellow")}
          className="btn" style={{backgroundColor:"yellow"}}>yellow
          </button>
          <button
          onClick={() => setColor("teal")}
          className="btn" style={{backgroundColor:"teal"}}>Teal
          </button>
          <button
          onClick={() => setColor("olive")}
          className="btn" style={{backgroundColor:"olive"}}>olive
          </button>
        </div>
       
    </div>
  )
}

export default App
