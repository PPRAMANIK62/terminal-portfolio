import { createContext, useRef, useState } from "react";
import {
  Form,
  Hints,
  Input,
  MobileBr,
  MobileSpan,
  Wrapper,
} from "./Terminal.styled";
import TermInfo from "./TermInfo";

type Command = {
  cmd: string;
  desc: string;
  tab: number;
};

export const commands: Command = [
  { cmd: "about", desc: "about Sat Naing", tab: 8 },
  { cmd: "clear", desc: "clear the terminal", tab: 8 },
  { cmd: "echo", desc: "print out anything", tab: 9 },
  { cmd: "education", desc: "my education background", tab: 4 },
  { cmd: "email", desc: "send an email to me", tab: 8 },
  { cmd: "gui", desc: "go to my portfolio in GUI", tab: 10 },
  { cmd: "help", desc: "check available commands", tab: 9 },
  { cmd: "history", desc: "view command history", tab: 6 },
  { cmd: "projects", desc: "view projects that I've coded", tab: 5 },
  { cmd: "pwd", desc: "print current working directory", tab: 10 },
  { cmd: "socials", desc: "check out my social accounts", tab: 6 },
  { cmd: "themes", desc: "check available themes", tab: 7 },
  { cmd: "welcome", desc: "display hero section", tab: 6 },
  { cmd: "whoami", desc: "about current user", tab: 7 },
];

type Term = {
  arg: string[];
  history: string[];
  renderer: boolean;
  index: number;
  clearHistory?: () => void;
};

export const termContext = createContext<Term>({
  arg: [],
  history: [],
  renderer: false,
  index: 0,
});

const Terminal = () => {
  const containerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputVal, setInputVal] = useState("");
  const [hints, setHints] = useState<string[]>([]);

  return (
    <Wrapper data-testid="terminal-wrapper" ref={containerRef}>
      {hints.length > 1 && (
        <div>
          {hints.map((hCmd) => (
            <Hints key={hCmd}>{hCmd}</Hints>
          ))}
        </div>
      )}

      <Form>
        <label htmlFor="terminal-input">
          <TermInfo /> <MobileBr />
          <MobileSpan>&#62;</MobileSpan>
        </label>

        <Input
          title="terminal-input"
          type="text"
          id="terminal-input"
          autoComplete="off"
          spellCheck="false"
          autoFocus
          autoCapitalize="off"
          ref={inputRef}
          value={inputVal}
        />
      </Form>
    </Wrapper>
  );
};

export default Terminal;