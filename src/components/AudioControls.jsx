import optionIcon from "../assets/icons/optionIcon.svg";
import playIcon from "../assets/icons/playIcon.svg";
import pauseIcon from "../assets/icons/pause.svg";
import prevSongIcon from "../assets/icons/prevSongIcon.svg";
import nextSongIcon from "../assets/icons/nextSongIcon.svg";
import speakerIcon from "../assets/icons/speakerIcon.svg";
import useMusic from "../customHooks/useMusic";

const AudioControls = () => {
  const {
    seekBg,
    seekBar,
    playStatus,
    play,
    pause,
    previous,
    nextSong,
    seekSong,
  } = useMusic();
  return (
    <>
    {/* seekbar */}
      <div
        ref={seekBg}
        className="w-[100%] audio-controller bg-gray-700 rounded-full cursor-pointer mt-3"
        onClick={seekSong}
      >
        <hr ref={seekBar} className="h-1  border-none bg-white rounded-full" />
      </div>
      {/* play controls */}
      <div className="audio-controller mt-4 flex justify-between items-center">
        <div className="rounded-full p-2  cursor-pointer backdrop-blur-2xl  hover:brightness-200 transition-all duration-300 ease-in-out">
          <img
            src={optionIcon}
            alt={"option"}
            className="h-5 w-5 md:h-4 md:w-4 2xl:h-5 2xl:w-5 rounded-full"
          />
        </div>
        <div className="controls flex justify-between items-center space-x-3">
          <div
            className="cursor-pointer backdrop-blur-2xl  hover:brightness-200 transition-all duration-300 ease-in-out"
            onClick={() => previous()}
          >
            <img
              src={prevSongIcon}
              alt={"previous song button"}
              className="h-5 w-5 md:h-4 md:w-4 2xl:h-5 2xl:w-5 rounded-full"
            />
          </div>
          <div
            className="cursor-pointer backdrop-blur-2xl  hover:brightness-200 transition-all duration-300 ease-in-out"
            onClick={() => (playStatus ? pause() : play())}
          >
            {playStatus ? (
              <img
                src={pauseIcon}
                alt={"pause"}
                className="h-10 w-10 md:h-8 md:w-8 2xl:h-10 2xl:w-10 rounded-full shadow-lg border-1 border-gray-900"
              />
            ) : (
              <img
                src={playIcon}
                alt={"play"}
                className="h-10 w-10 md:h-8 md:w-8 2xl:h-10 2xl:w-10 rounded-full shadow-lg border-1 border-gray-900"
              />
            )}
          </div>
          <div
            className="cursor-pointer backdrop-blur-2xl  hover:brightness-200 transition-all duration-300 ease-in-out"
            onClick={() => {
              nextSong();
            }}
          >
            <img
              src={nextSongIcon}
              alt={"next song button"}
              className="h-5 w-5 md:h-4 md:w-4 2xl:h-5 2xl:w-5 rounded-full"
            />
          </div>
        </div>
        <div className="rounded-full p-2  cursor-pointer backdrop-blur-2xl  hover:brightness-200 transition-all duration-300 ease-in-out">
          <img
            src={speakerIcon}
            alt={"speaker button"}
            className="h-5 w-5 md:h-4 md:w-4 2xl:h-5 2xl:w-5 rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default AudioControls;
