/* eslint-disable react/prop-types */
// import searchIcon from "../assets/icons/magnifierIcon.png";
import useMusic from "../customHooks/useMusic";
import SearchInput from "./SearchInput";
import SkeletonLoaders from "./SkeletonLoaders";

const SongList = ({isSidebarOpen}) => {
    
  const {
    displayList,
    currentSong,
    setCurrentSong,
    loading,
    error,
    playStatus,
    play,
    topTrackActive,
    toggleLists,
    handleGradientUpdate,
  } = useMusic();

  console.log(displayList, loading, error, "songs loading err");

  const handleChangeSong = async (song) => {
    if (song?.accent) {
      handleGradientUpdate(song.accent);
    }
    await setCurrentSong(song);
    play();
  };


  return (
    <div className="p-4 w-[95%] md:w-[85%] mx-auto flex flex-col h-full md:h-screen">
      <div className="flex w-full justify-center items-center md:justify-start space-x-5 mb-4 2xl:mt-2">
        <h2
          className={`text-lg md:text-lg font-bold cursor-pointer  hover:opacity-100  ${
            topTrackActive ? "opacity-60" : "opacity-100"
          } transition-all ease-in`}
          onClick={() => toggleLists()}
        >
          For You
        </h2>
        <h2
          className={`text-lg md:text-lg font-bold cursor-pointer  hover:opacity-100   ${
            !topTrackActive ? "opacity-60 animate-pulse" : "opacity-100 "
          } transition-all ease-in`}
          onClick={() => toggleLists()}
        >
          Top Tracks
        </h2>
      </div>
      <SearchInput />
      <ul
        className="flex-grow overflow-x-hidden overflow-y-auto "
        style={{
          maxHeight: isSidebarOpen
            ? "calc(100vh - 200px)"
            : "calc(100vh - 150px)",
        }}
      >
        {!loading ? (
          displayList && displayList.length > 0 ? (
            displayList.map((song) => (
              <li
                key={song.id}
                className={`flex justify-between items-center  text-sm p-2 cursor-pointer ${
                  currentSong.id == song.id &&
                  " backdrop-blur-2xl brightness-150"
                } hover: hover:backdrop-blur-2xl hover:brightness-150 rounded transition-all duration-100 ease-linear `}
                onClick={() => handleChangeSong(song)}
              >
                <div className="flex items-center">
                  <img
                    src={`https://cms.samespace.com/assets/${song.cover}`}
                    alt={song.title}
                    className={`w-12 h-12 md:w-10 md:h-10 2xl:w-12 2xl:h-12 mr-3 2xl:mr-4 rounded-full ${
                      currentSong.id == song.id &&
                      playStatus &&
                      "animate-slow-spin"
                    }`}
                  />
                  <div className="pl-1">
                    <p className="text-base md:text-sm 2xl:text-lg">{song.name}</p>
                    <p className="text-sm md:text-xs 2xl:text-sm opacity-60">
                      {song.artist}
                    </p>
                  </div>
                </div>
                <p className="text-base 2xl:text-md">{song?.duration}</p>
              </li>
            ))
          ) : (
            <div>
              <p className="text-center  mt-2 opacity-75">
                Oops! No matches. Search again?
              </p>
            </div>
          )
        ) : (
          <div>
            {/* skeleton loader */}
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div key={index}>
              <SkeletonLoaders type={"card"} />
                </div>
              ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default SongList;
