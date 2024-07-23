import useMusic from "../customHooks/useMusic";
import AudioControls from "./AudioControls";
import SkeletonLoaders from "./SkeletonLoaders";


const Player = () => {
    const {loading, currentSong, audioRef } = useMusic();

    if (!currentSong || Object.keys(currentSong).length == 0) {
        return (<div className="h-full w-full flex justify-center items-center">
            Please select a song !
        </div>)
    }

    return (
        <div className="h-full max-h-screen custom-css w-full flex justify-center items-start pt-[8vh] md:justify-start md:items-center md:pt-0  2xl:items-start 2xl:pt-[13vh] md:pl-28 2xl:pl-52">
            <audio ref={audioRef} src={currentSong.url} preload="auto">
            </audio>
            <div className="flex flex-col text-white p-4 rounded-lg  min-w-[280px] w-[90%] md:w-[320px] 2xl:w-[325px]">
                <div className="text-left mb-4">
                    <p className="text-2xl md:text-xl 2xl:text-2xl font-semibold">{currentSong.name}</p>
                    <p className="opacity-60 text-sm md:text-xs 2xl:text-sm">{currentSong.artist}</p>
                </div>
                <div className="vignette-container h-[300px] md:h-[250px]  2xl:h-[300px] w-full mb-4 rounded-md overflow-hidden">
                   {!loading? <img
                        src={`https://cms.samespace.com/assets/${currentSong.cover}`}
                        alt={currentSong.name}
                        className="h-full w-full object-cover"
                    />:<>
                    <SkeletonLoaders type="image" />
                    </>}
                </div>
                <AudioControls />
            </div>
        </div>
    );
}

export default Player