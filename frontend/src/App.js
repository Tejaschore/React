// import React, { useState } from "react";
import UseEffectFour from "./Components/useEffectFour";
import { Routes, Route } from 'react-router-dom';

// function App() {

//   setInterval(updateTime,1000);
//   const now=new Date().toLocaleTimeString();
//   const[time,setTime]=useState(now);

//   function updateTime(){
//     const newTime=new Date().toLocaleTimeString();
//     setTime(newTime);
//   }

//   return (
//     <div>
//       <h1>{time}</h1>
//       <button onClick={updateTime}>Get Time</button>
//     </div>

//   );
  
// }

function App() {

  return (
    <div className="App">
      <Routes>
        
        <Route path='/use-effect-4' element={<UseEffectFour />} />
      </Routes>
    </div>
  );

}

export default App;
