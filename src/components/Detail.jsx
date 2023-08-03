import { ThemeContext } from "@/contexts/ThemeContext";
import { LangContext } from "@/contexts/LangContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  let x;
  if (theme.name == "light") {
    x = lang.detail.lightActivated;
  } else {
    x = lang.detail.darkActivated;
  }
  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {/* tip: Get information from "theme" variable to determine 
      which theme is currently selected */}
      {x}
    </p>
  );
};
