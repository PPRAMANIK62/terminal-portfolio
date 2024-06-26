import _ from "lodash";
import React from "react";
import theme from "../components/styles/themes";
import { projectsId, projectsName, socialsName } from "./constants";

export const generateTabs = (num = 0): string => {
  let tabs = "\xA0\xA0";
  for (let i = 0; i < num; i++) {
    tabs += "\xA0";
  }
  return tabs;
};

export const isArgInvalid = (
  arg: string[],
  action: string,
  options: number[] | string[]
) =>
  arg[0] !== action || !_.includes(String(options), arg[1]) || arg.length > 2;

export const getCurrCmdArray = (history: string[]) =>
  _.split(history[0].trim(), " ");

export const checkRedirect = (
  rerender: boolean,
  currcmd: string[],
  cmd: string
): boolean =>
  // is submitted
  rerender &&
  // current commad starts with ('socials' | 'projects')
  currcmd[0] === cmd &&
  // current command has arg
  currcmd.length > 1 &&
  // first arg is 'go'
  currcmd[1] === "go" &&
  // if num of arg is valid
  currcmd.length < 4 &&
  // arg last part is one of id
  _.includes(projectsId, parseInt(currcmd[2]));

export const checkThemeSwitch = (
  rerender: boolean,
  currCmd: string[],
  themes: string[]
): boolean =>
  // is submitted
  rerender &&
  // current command starts with 'themes'
  currCmd[0] === "themes" &&
  // current command has arg
  currCmd.length > 1 &&
  // first arg is 'set'
  currCmd[1] === "set" &&
  // if number of arg is valid
  currCmd.length < 4 &&
  // arg last part is one of id
  _.includes(themes, currCmd[2]);

export const argTab = (
  inputVal: string,
  setInputVal: (value: React.SetStateAction<string>) => void,
  setHints: (value: React.SetStateAction<string[]>) => void,
  hintsCmds: string[]
): string[] | undefined => {
  // 1. if input is 'themes'
  if (inputVal === "themes ") {
    setInputVal("themes set");
    return [];
  }

  // 2. if input is 'themes s'
  else if (
    _.startsWith("themes", _.split(inputVal, " ")[0]) &&
    _.split(inputVal, " ")[1] !== "set" &&
    _.startsWith("set", _.split(inputVal, " ")[1])
  ) {
    setInputVal("themes set");
    return [];
  }

  // 3. if input is 'themes set '
  else if (inputVal === "themes set ") {
    setHints(_.keys(theme));
    return [];
  }

  // 4. if input starts with 'themes set ' + theme
  else if (_.startsWith(inputVal, "themes set ")) {
    _.keys(theme).forEach((t) => {
      if (_.startsWith(t, _.split(inputVal, " ")[2])) {
        hintsCmds = [...hintsCmds, t];
      }
    });
    return hintsCmds;
  }

  // 5. if input is 'projects ' or 'socials '
  else if (inputVal === "projects " || inputVal === "socials ") {
    setInputVal(`${inputVal}go`);
    return [];
  }

  // 6. if input is 'projects g' or 'socials g'
  else if (inputVal === "projects g" || inputVal === "socials g") {
    setInputVal(`${inputVal}o`);
    return [];
  }

  // 7. if input is 'socials go '
  else if (_.startsWith(inputVal, "socials go ")) {
    socialsName.forEach((t) => {
      hintsCmds = [...hintsCmds, t];
    });
    return hintsCmds;
  }

  // 8. if input is 'projects go '
  else if (_.startsWith(inputVal, "projects go ")) {
    projectsName.forEach((t) => {
      hintsCmds = [...hintsCmds, t];
    });
    return hintsCmds;
  }
};
