/* eslint-disable react/prop-types */
import SpotifyLogo from "../assets/images/spotifyLogo.svg"
import ProfileIcon from "../assets/images/Profile.png"
import PlaylistIcon from "../assets/icons/playlistIcon.svg"
import CrossIcon from "../assets/icons/crossIcon.svg"



const LeftSection = (props) => {
    const {isSidebarOpen,toggleSidebar} = props

    return (
        <div className="flex md:flex-col h-full justify-between items-center md:items-start p-4 px-8 md:px-6 2xl:p-6">
            <div className=" md:hidden  backdrop-blur-2xl  hover:brightness-150 transition-all duration-300 ease-in-out rounded-full" onClick={toggleSidebar}>
                <img src={isSidebarOpen ?CrossIcon :PlaylistIcon} alt="Playlist Logo" className="w-8 rounded-full p-1" />
            </div>
            <div>
                <img src={SpotifyLogo} alt="Spotify Logo" className="w-24 2xl:w-34" />
            </div>
            <div>
                <img src={ProfileIcon} alt="User Logo" className="w-10  md:w-12 rounded-full" />
            </div>
        </div>
    );
};

export default LeftSection;
