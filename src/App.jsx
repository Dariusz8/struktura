import { signal } from '@preact/signals-react'
import './App.css'
import LogoLoader from './LogoLoader';
import SideBar from './SideBar'; 
import HomePage from './HomePage';

export const sideBarStatus = signal(false);

function App() {
  //const count = signal(0);
  return (
    <>
      <div>
        {/* <button onClick={() => count.value += 1}>
          count is {count}
        </button> */}
        <LogoLoader/>
        <SideBar/>
        <HomePage/>
      </div>
    </>
  )
}

export default App
