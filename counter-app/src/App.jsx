import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 >Counter App</h1>
      <Card>
        <h1>Count</h1>
          <div className="count">
          {count}
          </div>
          <div className='Buttons'>
            <button className='minus  mx-3 mt-3' onClick={()=>setCount(count - 1)}>DECREMENT -</button>
            <button className='plus'  onClick={()=>setCount(count + 1)}>INCREMENT +</button>
          </div>
      </Card>
    </>
  )
}

export default App
