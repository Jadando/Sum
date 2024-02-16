import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar/Navbar.tsx'
import T1 from './t1/t1.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    {/* <T1 /> */}
  </React.StrictMode>,
)
