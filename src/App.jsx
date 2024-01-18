import { signal } from '@preact/signals-react'
import './App.css'
import LogoLoader from './LogoLoader';

function App() {
  const count = signal(0);
  return (
    <>
      <div className="card">
        <button onClick={() => count.value += 1}>
          count is {count}
        </button>
        <LogoLoader/>
      </div>
    </>
  )
}

export default App
