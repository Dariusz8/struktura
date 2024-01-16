import { signal } from '@preact/signals-react'
import './App.css'

function App() {
  const count = signal(0);
  return (
    <>
      <h1>Struktura</h1>
      <div className="card">
        <button onClick={() => count.value += 1}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
