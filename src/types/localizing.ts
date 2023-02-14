export type TLocalizing = {
  lang: string;
};

export const defaultLang: TLocalizing = {
  lang: window.navigator.language.includes("ko") ? "ko" : "en",
};
