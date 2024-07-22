import LeftSection from './components/LeftSection'
import Player from './components/Player'
import SongList from './components/SongList'
import "./App.css"
// import useMusic from './customHooks/useMusic'
import useApplyThemeColors from './customHooks/useApplyThemeColors'
import { useState } from 'react'

const App = () => {
  useApplyThemeColors();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  console.log(isSidebarOpen, "isSidebarOpen")

  return (
    <div className='h-screen w-screen custom-gradient  text-white flex flex-col md:flex-row'>
      <div className='w-full md:w-1/6 '>
        <LeftSection isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className={`transform transition-transform duration-300 ${isSidebarOpen ? "w-full flex translate-x-0" : "hidden"} md:w-2/6  md:flex justify-end `}>
        <SongList isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className={`h-full w-full md:w-3/6 ${isSidebarOpen ? "hidden" : "block"} md:block `}>
        <Player />
      </div>
    </div>
  )
}

export default App