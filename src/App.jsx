import { signal } from '@preact/signals-react'
import './App.css'
import LogoLoader from './LogoLoader';
import SideBar from './SideBar'; 
import HomePage from './HomePage';

//all signals values. put in sep file, resort to useState if cannot avoid refreshing to show updated FE
// export const sideBarStatus = signal(false);
// export const portfolioStatus = signal(false);

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
