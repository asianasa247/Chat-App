import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {useEffect} from "react";
import {FontFamily} from "../constants/typography";

SplashScreen.preventAutoHideAsync();

export const useCustomFont = () => {
  const [loaded, error] = useFonts({
    [FontFamily.REGULAR]: require("../../assets/fonts/SFPRODISPLAYREGULAR.ttf"),
    [FontFamily.BOLD]: require("../../assets/fonts/SFPRODISPLAYBOLD.ttf"),
    [FontFamily.HEAVY_ITALIC]: require("../../assets/fonts/SFPRODISPLAYHEAVYITALIC.ttf"),
    [FontFamily.LIGHT_ITALIC]: require("../../assets/fonts/SFPRODISPLAYLIGHTITALIC.ttf"),
    [FontFamily.MEDIUM]: require("../../assets/fonts/SFPRODISPLAYMEDIUM.ttf"),
    [FontFamily.SEMIBOLD_ITALIC]: require("../../assets/fonts/SFPRODISPLAYSEMIBOLDITALIC.ttf"),
    [FontFamily.THIN_ITALIC]: require("../../assets/fonts/SFPRODISPLAYTHINITALIC.ttf"),
    [FontFamily.ULTRA_THIN_ITALIC]: require("../../assets/fonts/SFPRODISPLAYULTRALIGHTITALIC.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return {loaded, error};
};
