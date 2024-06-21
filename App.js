import "react-native-gesture-handler";
import React, { useCallback } from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";

SplashScreen.preventAutoHideAsync();

import Onboarding from "./app/pages/Onboarding";
import Signup from "./app/pages/Signup";
import Signin from "./app/pages/Signin";
import ForgotPassword from "./app/pages/ForgotPassword";

import HomeTabsView from "./app/navigation/HomeTabsView";

import Categories from "./app/pages/Categories";

import CreateQuiz from "./app/pages/CreateQuiz";
import JoinQuiz from "./app/pages/JoinQuiz";
import Challenge from "./app/pages/Challenge";
import StartQuiz from "./app/pages/StartQuiz";

import QuizBuilder from "./app/pages/QuizBuilder";
import QuizBuilderFinish from "./app/pages/QuizBuilderFinish";
import Notifications from "./app/pages/Notifications";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    nunlight: require("./app/fonts/nunlight.ttf"),
    nunregular: require("./app/fonts/nunregular.ttf"),
    nunbold: require("./app/fonts/nunbold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            animationTypeForReplace: "pop",
            animation: "slide_from_right",
            headerShown: false,
          }}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Main" component={HomeTabsView} />
          <Stack.Screen name="CreateQuiz" component={CreateQuiz} />
          <Stack.Screen name="QuizBuilder" component={QuizBuilder} />
          <Stack.Screen
            name="QuizBuilderFinish"
            component={QuizBuilderFinish}
          />
          <Stack.Screen name="JoinQuiz" component={JoinQuiz} />
          <Stack.Screen name="Challenge" component={Challenge} />
          <Stack.Screen name="StartQuiz" component={StartQuiz} />

          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Categories" component={Categories} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </GestureHandlerRootView>
  );
}
