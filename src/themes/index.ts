export type ThemeSchema = {
  screenBackground: string;
  text: string;
  heading: string;
  textMuted: string;
  primaryBackground: string;
  input: string;
  footerButtonHover: string;
  border: string;
};

export const themes: ThemeSchema[] = [
  {
    screenBackground:
      "bg-mobile-dark bg-auto sm:bg-desktop-dark bg-no-repeat bg-dark-700",
    text: "text-dark-100",
    heading: "text-dark-100",
    textMuted: "text-dark-300",
    primaryBackground: "bg-dark-600",
    input: `bg-dark-600 text-dark-100 caret-gradient-from`,
    footerButtonHover: "hover:text-dark-100",
    border: "border-dark-500",
  },

  {
    screenBackground:
      "bg-mobile-light bg-auto sm:bg-desktop-light bg-no-repeat bg-light-200",
    heading: "text-light-100",
    textMuted: "text-light-400",
    text: "text-light-500",
    primaryBackground: "bg-light-100",
    input: `bg-light-100 text-light-200 caret-gradient-from`,
    footerButtonHover: "hover:text-light-500",
    border: "border-light-300",
  },
];
