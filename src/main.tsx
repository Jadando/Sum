import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar/Navbar.tsx'
import T1 from './t1/t1.tsx'
import Slider from './slider/slider.tsx'
import Frases from './frases/frases.tsx'
import About from './about/about.tsx'
import Footer from './footer/footer.tsx'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <T1 />
    <Frases frase=' Conecte-se a nós para uma <strong>experiência feita sob medida.</strong>' botao='Converse conosco' />
    <Slider />
    <Frases frase='Estamos aqui para tornar seus <strong>resultados mais eficazes!</strong>' botao='Converse conosco' />
    <About />
    <Footer/>
  </React.StrictMode>
)
