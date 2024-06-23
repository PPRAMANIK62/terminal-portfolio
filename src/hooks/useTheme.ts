import { useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import themes from "../components/styles/themes";
import { getFromLocalStorage, setToLocalStorage } from "../utils/storage";

const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: DefaultTheme) => {
    setToLocalStorage("tsn-theme", mode.name);
    setTheme(mode);
  };

  useEffect(() => {
    const localThemeName = getFromLocalStorage("tsn-theme");
    localThemeName ? setTheme(themes[localThemeName]) : setTheme(themes.dark);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};

export default useTheme;
