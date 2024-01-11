import Navbar from './components/navbar'
import {Outlet} from 'react-router-dom'
import {navState} from './store/atom'
import { useRecoilState } from 'recoil'
import CloseMenu from './assets/navBar/CloseMenu.svg'


function App() {
  const [navOpen,setNavOpen] = useRecoilState(navState)
  return (
    <div className='z-0 w-screen h-screen flex flex-row bg-Black98 fixed'>
      {
        navOpen && <div className='z-40 overflow-hidden w-full h-full fixed flex flex-row md:hidden'>
          <Navbar />
          <div onClick={()=>{setNavOpen(false)}} className='flex-1 bg-Navbar/30 p-4'>   
            <button className='w-10 h-10 hover:bg-white/20 rounded-full flex items-center justify-center' onClick={()=>{setNavOpen(false)}}>
              <img src={CloseMenu} alt="close-menu" />
            </button>
          </div>
        </div>
      }
      <div className='hidden md:block'>
      <Navbar />
      </div>
      <Outlet/>
    </div>
  )
}

export default App
