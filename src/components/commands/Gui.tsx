import _ from "lodash";
import { useContext } from "react";
import { mySite } from "../../utils/constants";
import { termContext } from "../Terminal";

const Gui = () => {
  const { history, rerender } = useContext(termContext);

  // get current command
  const currCmd = _.split(history[0], " ");

  // check current command and redirect
  if (rerender && currCmd[0] === "gui") {
    window.open(mySite, "_blank");
  }

  return <span>Redirecting...</span>;
};

export default Gui;
