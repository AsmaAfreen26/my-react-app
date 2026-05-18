import './App.css'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState('white')

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0A0924'
      showAlert("Dark mode enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success")
    }
  }

  const changeColor = (color) => {
    setColor(color)
    document.body.style.backgroundColor = color

  }



  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} changeColor={changeColor} />
      <Alert alert={alert} />
      <div className="container my-3">
         <Routes>                       {/* ← Switch → Routes */}
          <Route path="/about" element={<About />} />   {/* ← element prop instead of children */}
          <Route path="/" element={
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} changeColor={changeColor} color={color} />
          } />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
