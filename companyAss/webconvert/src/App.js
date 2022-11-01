import Navbar from './components/Navbar'
import './App.css'
import Header from './components/Header'
import Custum from './components/Custum'
import Details from './components/Details'
import Teams from './components/Teams'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App(){
  return(
    <>
      <Navbar/>
      <Header/>
      <Custum/>
      <Details/>
      <Teams/>
      <Pricing/>
      <Footer/>
    </>
  )
}