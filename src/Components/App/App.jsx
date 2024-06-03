import heroes from "../../heroes.json"
import Cards from "../Cards/Cards"
import "./App.css"

function App() {
  console.log(heroes)
  return (
    <>
    <div className="container">{heroes.map((item,index) => <Cards key={index} item={item}/>)}</div>
      
    </>
  )
}

export default App
