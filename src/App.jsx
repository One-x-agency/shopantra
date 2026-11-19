import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import './scss/main.scss';
import Home from './home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './theme/theme.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
    </>
  )
}

export default App
