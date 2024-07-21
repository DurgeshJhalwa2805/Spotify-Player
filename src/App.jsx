import LeftSection from './components/LeftSection'
import Player from './components/Player'
import SongList from './components/SongList'
import "./App.css"

const App = () => {
  return (
    <div className='h-screen w-screen bg-custom-gradient shadow-custom-shadow text-white flex'>
      <div className='w-1/6'>
        <LeftSection />
      </div>
      <div className='w-2/6 flex justify-end'>
        <SongList />
      </div>
      <div className='w-3/6'>
        <Player />
      </div>
    </div>
  )
}

export default App