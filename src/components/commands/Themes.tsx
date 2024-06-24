import _ from "lodash";
import { useContext, useEffect } from "react";
import { themeContext } from "../../App";
import {
  checkThemeSwitch,
  getCurrCmdArray,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import { Wrapper } from "../styles/Terminal.styled";
import { ThemeSpan, ThemesWrapper } from "../styles/Themes.styled";
import theme from "../styles/themes";

const myThemes = _.keys(theme);

const Themes = () => {
  const { arg, history, rerender } = useContext(termContext);

  const themeSwitcher = useContext(themeContext);

  // get current command
  const currCmd = getCurrCmdArray(history);

  // check if current command makes redirect
  useEffect(() => {
    if (checkThemeSwitch(rerender, currCmd, myThemes)) {
      themeSwitcher?.(theme[currCmd[2]]);
    }
  }, [arg, rerender, currCmd]);

  // check if arg is valid
  const checkArg = () =>
    isArgInvalid(arg, "set", myThemes) ? <Usage cmd="themes" /> : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <Wrapper>
      <ThemesWrapper>
        {myThemes.map((myTheme) => (
          <ThemeSpan key={myTheme}>{myTheme}</ThemeSpan>
        ))}
      </ThemesWrapper>
      <Usage cmd="themes" marginY />
    </Wrapper>
  );
};

export default Themes;
