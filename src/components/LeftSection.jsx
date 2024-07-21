import SpotifyLogo from "../assets/images/Logo.png"
import ProfileIcon from "../assets/images/Profile.png"


const LeftSection = () => {
    return (
        <div className="flex flex-col h-full justify-between items-start p-4">
            <div>
                <img src={SpotifyLogo} alt="Spotify Logo" className="w-24" />
            </div>
            <div>
                <img src={ProfileIcon} alt="User Logo" className="w-12 rounded-full" />
            </div>
        </div>
    );
};

export default LeftSection;
