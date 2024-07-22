import useMusic from "../customHooks/useMusic";
import optionIcon from "../assets/icons/optionIcon.svg"
import playIcon from "../assets/icons/playIcon.svg"
import pauseIcon from "../assets/icons/pause.svg"
import prevSongIcon from "../assets/icons/prevSongIcon.svg"
import nextSongIcon from "../assets/icons/nextSongIcon.svg"
import speakerIcon from "../assets/icons/speakerIcon.svg"





const Player = () => {
    const { currentSong, audioRef, seekBg, seekBar, playStatus, play, pause, previous, nextSong, seekSong } = useMusic();
    console.log(currentSong, "current")

    if (!currentSong || Object.keys(currentSong).length == 0) {
        return (<div className="h-full w-full flex justify-center items-center">
            Please select a song !
        </div>)
    }

    return (
        <div className="h-full max-h-screen custom-css w-full flex justify-center items-start pt-[4vh] md:justify-start md:items-center md:pt-0  2xl:items-start 2xl:pt-[13vh] md:pl-28 2xl:pl-52">
            <audio ref={audioRef} src={currentSong.url} preload="auto">
            </audio>
            <div className="flex flex-col text-white p-4 rounded-lg  min-w-[280px] w-[90%] max-w-[310px] 2xl:w-[325px]">
                <div className="text-left mb-4">
                    <p className="text-xl 2xl:text-2xl font-semibold">{currentSong.name}</p>
                    <p className="opacity-60 text-xs 2xl:text-sm">{currentSong.artist}</p>
                </div>
                <div className="vignette-container h-[250px]  2xl:h-[300px] w-full mb-4 rounded-md overflow-hidden">
                    <img
                        src={`https://cms.samespace.com/assets/${currentSong.cover}`}
                        alt={currentSong.name}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div ref={seekBg} className="w-[100%] bg-gray-700 rounded-full cursor-pointer mt-3" onClick={seekSong}>
                    <hr ref={seekBar} className="h-1  border-none bg-white rounded-full" />
                </div>
                <div className="audio-controller mt-4 flex justify-between items-center">
                    <div className="rounded-full p-2  cursor-pointer backdrop-blur-2xl  hover:brightness-200 transition-all duration-300 ease-in-out">
                        <img
                            src={optionIcon}
                            alt={"option"}
                            className="h-4 w-4 2xl:h-5 2xl:w-5 rounded-full"
                        />
                    </div>
                    <div className="controls flex justify-between items-center space-x-3">
                        <div className="cursor-pointer backdrop-blur-2xl  hover:brightness-200 transition-all duration-300 ease-in-out" onClick={() => previous()}>
                            <img
                                src={prevSongIcon}
                                alt={"previous song button"}
                                className="h-4 w-4 2xl:h-5 2xl:w-5 rounded-full"
                            />
                        </div>
                        <div className="cursor-pointer backdrop-blur-2xl  hover:brightness-200 transition-all duration-300 ease-in-out" onClick={() => playStatus ? pause() : play()}>
                            {playStatus ?
                                <img
                                    src={pauseIcon}
                                    alt={"pause"}
                                    className="h-8 w-8 2xl:h-10 2xl:w-10 rounded-full shadow-lg border-1 border-gray-900"
                                />

                                : <img
                                    src={playIcon}
                                    alt={"play"}
                                    className="h-8 w-8 2xl:h-10 2xl:w-10 rounded-full shadow-lg border-1 border-gray-900"
                                />}

                        </div>
                        <div className="cursor-pointer backdrop-blur-2xl  hover:brightness-200 transition-all duration-300 ease-in-out" onClick={() => { nextSong() }}>
                            <img
                                src={nextSongIcon}
                                alt={"next song button"}
                                className="h-4 w-4 2xl:h-5 2xl:w-5 rounded-full"
                            />
                        </div>
                    </div>
                    <div className="rounded-full p-2  cursor-pointer backdrop-blur-2xl  hover:brightness-200 transition-all duration-300 ease-in-out">
                        <img
                            src={speakerIcon}
                            alt={"speaker button"}
                            className="h-4 w-4 2xl:h-5 2xl:w-5 rounded-full"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Player