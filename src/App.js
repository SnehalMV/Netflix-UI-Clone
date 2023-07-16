import Banner from "./Components/Banner/Banner"
import NavBar from "./Components/NavBar/NavBar"
import RowPost from "./Components/RowPost/RowPost"
import { action, originals, horror, trending } from "./constants"
import './App.css'

const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" /> 
      <RowPost  url={action} title="Action" isSmall/> 
      <RowPost  url={trending} title="Trending"/> 
      <RowPost  url={horror} title="Horror" isSmall/> 


    </>
  )
}

export default App