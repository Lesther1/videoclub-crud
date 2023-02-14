import './App.css'
import Form from './components/Form'
import Navbar from './components/navbar'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className='crud container'>
        <Form/>
      </div>
    </div>
  )
}

export default App
