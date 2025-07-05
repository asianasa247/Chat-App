import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCustomFont } from "./src/hooks/useCustomFont";
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
    <SafeAreaProvider>
      <ActionSheetProvider>
        <NavigationContainer>{isLoggedIn ? <MainTabNavigatorBottom /> : <AuthStackNavigator />}</NavigationContainer>
      </ActionSheetProvider>
    </SafeAreaProvider>
  );
};

export default App;
