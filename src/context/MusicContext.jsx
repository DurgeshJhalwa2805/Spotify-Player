/* eslint-disable no-unused-vars */
import React, {createContext, useState,useEffect, useRef} from "react"

const MusicContext = createContext()

// eslint-disable-next-line react/prop-types
const MusicProvider = ({ children })=>{

    const audioRef = useRef()
    const seekBg = useRef()
    const seekBar = useRef()

    const [songs,setSongs] = useState([])
    const [topTracks,setTopTracks] = useState([])
    const [displayList,setDisplayList] = useState([])
    const [topTrackActive,setTopTrackActive] = useState(false)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [currentSong, setCurrentSong] = useState(null);
    const [playStatus,setPlayStatus] = useState(false);
    const [themeColors, setThemeColors] = useState({
        backgroundGradient: '#1f1f1f',
        textBase: '#fff',
      });
    const [time,setTime] = useState({
        currentTime:{
            second:0,
            minute:0,
        },
        totalTime:{
            second:0,
            minute:0,
        }
    })

    useEffect(()=>{
        const fetchSongs = async () => {
            try {
              const response = await fetch('https://cms.samespace.com/items/songs'); 
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setSongs(data?.data);
              setDisplayList(data?.data);
              setTopTracks(data.data.filter((song)=>song.top_track))
              setCurrentSong(data?.data[0])
            } catch (error) {
              setError(error.message);
            } finally {
              setLoading(false);
            }
          };
      
          fetchSongs();
    },[])

    // to update time every second when played and also to update seekbar using audioRef
    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = ()=>{
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime /audioRef.current.duration * 100))+ "%"
                setTime({
                    currentTime:{
                        second:Math.floor(audioRef.current.currentTime % 60),
                        minute:Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime:{
                        second:Math.floor(audioRef.current.duration % 60),
                        minute:Math.floor(audioRef.current.duration / 60),
                    }
                })
            }
            
        },1000)
    },[audioRef])

    useEffect(()=>{
        if(topTrackActive){
            setDisplayList(topTracks)
        }else{
            setDisplayList(songs)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[topTrackActive])

    const toggleLists = ()=>{
        setTopTrackActive(!topTrackActive)
    }

    const play = async ()=>{
        await audioRef.current.play()
        setPlayStatus(true)
    }

    const pause = async()=>{
        await audioRef.current.pause()
        setPlayStatus(false)
    }

    const previous =async ()=>{
        const index = displayList.findIndex(obj => obj.id === currentSong.id);
        await setCurrentSong(songs[index - 1])
        play()
    }

    const nextSong =async ()=>{
        const index = displayList.findIndex(obj => obj.id === currentSong.id);
        await setCurrentSong(songs[index==songs.length-1 ?0: index+1])
        play()
    }

    const seekSong = async (event)=>{
        audioRef.current.currentTime = ((event.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
    }


    return(
        <MusicContext.Provider value={{displayList,currentSong, setCurrentSong,loading,error,audioRef,seekBg,seekBar,time,setTime,play,pause ,playStatus,previous,nextSong,seekSong,topTrackActive,toggleLists}}>
            {children}
        </MusicContext.Provider>
    )
}

export {MusicProvider,MusicContext}