import { atom } from "recoil";
import { defaultLang, TLocalizing } from "../types/localizing";

export const langListState = atom<TLocalizing>({
  key: "langListState",
  default: defaultLang,
});
