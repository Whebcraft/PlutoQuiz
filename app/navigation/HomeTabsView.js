import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTabBar from "./TabBar";

import { Home } from "../pages/Home";
import { History } from "../pages/History";
import { Leaderboard } from "../pages/Leaderboard";
import { Profile } from "../pages/Profile";

import colors from "../components/colors";

const Tab = createBottomTabNavigator();

export default function HomeTabsView({ navigation, route }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute" },
      }}
      sceneContainerStyle={{
        backgroundColor: colors.defaultbg,
      }}
      tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Tab.Screen
        name="History"
        component={History}
        options={{ title: "History" }}
      />
      <Tab.Screen name="Add" component={History} options={{ title: "Add" }} />
      <Tab.Screen
        name="Rank"
        component={Leaderboard}
        options={{ title: "Leaderboard" }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Tab.Navigator>
  );
}
