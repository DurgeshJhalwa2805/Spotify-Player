import searchIcon from "../assets/icons/magnifierIcon.png"
import useMusic from "../customHooks/useMusic";

const SongList = () => {
    const { displayList,currentSong,setCurrentSong, loading, error ,playStatus,play ,topTrackActive,toggleLists,handleGradientUpdate} = useMusic();

    console.log(displayList,loading,error,"songs loading err")

    const handleChangeSong =async (song)=>{
        if(song?.accent){
            handleGradientUpdate(song.accent)
        }   
        await setCurrentSong(song)
        play()
    }

    return (
        <div className="p-4 w-[85%] flex flex-col h-screen">
    <div className="flex space-x-5 mb-4">
        <h2 className={`text-lg font-bold cursor-pointer  ${topTrackActive ? "opacity-60":" opacity-100"} hover:opacity-60 transition-all ease-in`} onClick={()=>toggleLists()}>For You</h2>
        <h2 className={`text-lg font-bold cursor-pointer ${!topTrackActive ? "opacity-60":" opacity-100"} hover:opacity-100 transition-all ease-in`} onClick={()=>toggleLists()}>Top Tracks</h2>
    </div>
    <div className='flex items-center w-full p-2 mb-4  backdrop-blur-2xl brightness-125 text-white rounded'>
        <input
            type="text"
            placeholder="Search Song, Artist"
            className="flex-grow bg-transparent outline-none px-3  placeholder:text-sm"
        />
        <img src={searchIcon} alt="User Logo" className="w-4 h-4 bg-transparent" />
    </div>
    <ul className="flex-grow overflow-x-hidden overflow-y-auto " style={{ maxHeight: 'calc(100vh - 150px)' }}>
        {displayList && displayList.length > 0 && displayList.map((song) => (
            <li key={song.id} className={`flex justify-between items-center  text-sm p-2 cursor-pointer ${currentSong.id == song.id && " backdrop-blur-2xl brightness-150 "} hover: hover:backdrop-blur-2xl hover:brightness-150 rounded transition-all duration-100 ease-linear `} onClick={() => handleChangeSong(song)}>
                <div className="flex items-center">
                    <img src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.title} className={`w-10 h-10 mr-3 rounded-full ${currentSong.id == song.id && playStatus && "animate-slow-spin"}`} />
                    <div className="pl-1">
                        <p>{song.name}</p>
                        <p className="text-xs opacity-60">{song.artist}</p>
                    </div>
                </div>
                <p className="">{song.duration || "4:16"}</p>
            </li>
        ))}
    </ul>
</div>

    );
};

export default SongList;
