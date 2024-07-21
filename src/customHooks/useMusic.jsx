import { useContext } from 'react';
import { MusicContext } from '../context/MusicContext';

const useMusic = () => {
  return useContext(MusicContext);
};

export default useMusic;
