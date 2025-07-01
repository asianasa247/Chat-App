import {ActionSheetProvider} from "@expo/react-native-action-sheet";
import {NavigationContainer} from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import {useCustomFont} from "./src/hooks/useCustomFont";
import AuthStackNavigator from "./src/navigation/auth/AuthStackNavigator";
import MainTabNavigatorBottom from "./src/navigation/MainTabNavigatorBottom";
SplashScreen.preventAutoHideAsync();
const App = () => {
  const isLoggedIn = true; // hoặc check từ context/store
  const {loaded, error} = useCustomFont();

  if (!loaded && !error) {
    return null;
  }
  return (
    <ActionSheetProvider>
      <NavigationContainer>{isLoggedIn ? <MainTabNavigatorBottom /> : <AuthStackNavigator />}</NavigationContainer>
    </ActionSheetProvider>
  );
};

export default App;
