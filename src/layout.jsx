import Navbar from './components/navbar'
import {Outlet} from 'react-router-dom'

function App() {

  return (
    <div className='w-screen h-screen flex-row bg-Black98'>
      <Navbar />
      <div className='ml-[224px]'>
      <Outlet />

      </div>
    </div>
  )
}

export default App
