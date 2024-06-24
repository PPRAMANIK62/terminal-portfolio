export type Command = {
  cmd: string;
  desc: string;
  tab: number;
}[];

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

export const socials = ["1. Github", "2. LinkedIn", "3. Twitter"];

export const projects = [
  "1. Project 1",
  "2. Project 2",
  "3. Project 3",
  "4. Project 4",
];

export const eduBg = [
  {
    title: "Bachelor of Technology",
    desc: "National Institute of Technology, Durgapur | 2022 - Present",
  },
];

export const myMail = "purbayanpramanik62@gmail.com";
export const mySite =
  "https://purbayan-ewu3gw1m2-purbayan-pramaniks-projects.vercel.app/";
