import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import Body from './components/body/Body'
import "./App.scss"

export default function App() {
  return (
    <div className='containerApp m-5'>
      <Header></Header>
      <Body></Body>
    </div>
  )
}
