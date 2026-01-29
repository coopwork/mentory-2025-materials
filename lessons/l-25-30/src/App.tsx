import './App.css'
import LikesBlock from "./components/likes-block.tsx";
import Accordion from "./components/accordion.tsx";


function App() {

  return (
    <div>
			<h1>
      	Work!
			</h1>

			<Accordion/>

			<LikesBlock/>
			<LikesBlock/>
    </div>
  )
}

export default App
