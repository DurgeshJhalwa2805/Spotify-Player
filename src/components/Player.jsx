import useMusic from "../customHooks/useMusic";
import optionIcon from "../assets/icons/optionIcon.svg"
import playIcon from "../assets/icons/playIcon.svg"
import pauseIcon from "../assets/icons/pause.svg"
import prevSongIcon from "../assets/icons/prevSongIcon.svg"
import nextSongIcon from "../assets/icons/nextSongIcon.svg"
import speakerIcon from "../assets/icons/speakerIcon.svg"





const Player = () => {
    const { currentSong ,audioRef , seekBg,seekBar,playStatus,play,pause,previous,nextSong,seekSong} = useMusic();
    console.log(currentSong,"current")

    if(!currentSong || Object.keys(currentSong).length ==0){
        return (<div className="h-full w-full flex justify-center items-center">
            Please select a song !
        </div>)
    }

    return (
      <div className="h-full w-full flex justify-start items-center pl-28">
        <audio  ref={audioRef} src={currentSong.url} preload="auto">
        </audio>
        <div className="flex flex-col text-white p-4 rounded-lg w-[280px]">
        <div className="text-left mb-4">
            <p className="text-xl font-semibold">{currentSong.name}</p>
            <p className="text-gray-400 text-xs">{currentSong.artist}</p>
        </div>
          <img
            src={`https://cms.samespace.com/assets/${currentSong.cover}`}
            alt={currentSong.name}
            className=" h-[250px] w-full rounded-md mb-4"
          />
          <div ref={seekBg} className="w-[100%] bg-gray-700 rounded-full cursor-pointer mt-3" onClick={seekSong}>
            <hr ref={seekBar} className="h-1  border-none bg-white rounded-full"/>
          </div>
          <div className="audio-controller mt-4 flex justify-between items-center">
                <div className="rounded-full p-2 bg-[#2d2009] cursor-pointer backdrop-blur-2xl  hover:brightness-150 transition-all duration-300 ease-in-out">
                    <img
                        src={optionIcon}
                        alt={"option"}
                        className="h-4 w-4 rounded-full"
                    />
                </div>
                <div className="controls flex justify-between items-center space-x-3">
                    <div className="cursor-pointer backdrop-blur-2xl  hover:brightness-150 transition-all duration-300 ease-in-out" onClick={()=>previous()}>
                        <img
                            src={prevSongIcon}
                            alt={"previous song button"}
                            className="h-4 w-4 rounded-full"
                        />
                    </div>
                    <div className="cursor-pointer backdrop-blur-2xl  hover:brightness-150 transition-all duration-300 ease-in-out" onClick={()=>playStatus?pause():play()}>
                        {playStatus ?
                            <img
                            src={pauseIcon}
                            alt={"pause"}
                            className="h-8 w-8 rounded-full"
                        />
                          
                       : <img
                            src={playIcon}
                            alt={"play"}
                            className="h-8 w-8 rounded-full"
                        />}
                        
                    </div>
                    <div className="cursor-pointer backdrop-blur-2xl  hover:brightness-150 transition-all duration-300 ease-in-out" onClick={()=>nextSong()}>
                         <img
                            src={nextSongIcon}
                            alt={"next song button"}
                            className="h-4 w-4 rounded-full"
                        />
                    </div>
                </div>
                <div className="rounded-full p-2 bg-[#2d2009] cursor-pointer backdrop-blur-2xl  hover:brightness-150 transition-all duration-300 ease-in-out">
                    <img
                    src={speakerIcon}
                    alt={"speaker button"}
                    className="h-4 w-4 rounded-full"
                    />
                </div>
                
          </div>
        </div>
      </div>
    );
}

export default Player