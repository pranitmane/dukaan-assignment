import Navbar from './components/navbar'
import {Outlet} from 'react-router-dom'


function App() {
  return (
    <div className='z-0 w-screen h-screen flex flex-row bg-Black98 fixed'>
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default App
