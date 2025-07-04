import { useState } from 'react'
import Form from "./component/Form"
import Dashboard from './component/dashboard'

function App() {
  const [place,setPlace]=useState("")

  return (
    <div className='flex flex-col items-center'>
    <p className='text-center m-4 font-bold text-3xl'>Mini Weather App</p>
    <Form place={place} setPlace={setPlace}/>
    <Dashboard place={place}/>
      
    </div>
  )
}

export default App
