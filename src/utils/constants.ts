export type Command = {
  cmd: string;
  desc: string;
  tab: number;
}[];

export const commands: Command = [
  { cmd: "about", desc: "about Purbayan Pramanik", tab: 8 },
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

export const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/PPRAMANIK62",
    tab: 4,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://linkedin.com/in/ppramanik6",
    tab: 2,
  },
  {
    id: 3,
    title: "Twitter",
    url: "https://x.com/PPramanik13941",
    tab: 3,
  },
];

export const socialsName = socials.map(({ id, title }) => {
  return `${id}. ${title}`;
});

export const socialsId = socials.map(({ id }) => {
  return id;
});

export const projects = [
  {
    id: 1,
    title: "Project 1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, tempore?",
    url: "https://www.google.com",
  },
  {
    id: 2,
    title: "Project 2",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, tempore?",
    url: "",
  },
  {
    id: 3,
    title: "Project 3",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, tempore?",
    url: "",
  },
  {
    id: 4,
    title: "Project 4",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, tempore?",
    url: "",
  },
];

export const projectsName = projects.map(({ id, title }) => {
  return `${id}. ${title}`;
});

export const projectsId = projects.map(({ id }) => {
  return id;
});

export const eduBg = [
  {
    title: "Bachelor of Technology",
    desc: "National Institute of Technology, Durgapur | 2022 - Present",
  },
];

export const myMail = "purbayanpramanik62@gmail.com";
export const mySite =
  "https://purbayan-ewu3gw1m2-purbayan-pramaniks-projects.vercel.app/";
