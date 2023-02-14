import LocalizedStrings from "react-localization";
import { useRecoilValue } from "recoil";
import localization from "../localization";
import { langListState } from "../store/localizing";

const useLocalizing = () => {
  const lang = useRecoilValue(langListState);
  let translation = new LocalizedStrings(localization);
  translation.setLanguage(lang.lang);

  return translation;
};

export default useLocalizing;
