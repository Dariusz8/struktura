import { signal } from '@preact/signals-react'
import './App.css'
import LogoLoader from './LogoLoader';
import SideBar from './SideBar'; 

function App() {
  const count = signal(0);
  return (
    <>
      <div>
        {/* <button onClick={() => count.value += 1}>
          count is {count}
        </button> */}
        <LogoLoader/>
        <SideBar/>
      </div>
    </>
  )
}

export default App
