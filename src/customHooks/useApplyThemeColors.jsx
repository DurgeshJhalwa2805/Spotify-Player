import { useEffect } from 'react';
import useMusic from './useMusic';

const useApplyThemeColors = () => {
  const { themeColors } = useMusic();

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background-gradient', themeColors.backgroundGradient);
    root.style.setProperty('--text-base', themeColors.textBase);
    root.style.setProperty('--theme-accent', themeColors.themeAccent);
  }, [themeColors]);
};

export default useApplyThemeColors;
