import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import colors from "../components/colors";

const MyTabBar = ({ state, descriptors, navigation }) => {
  let icons = ["planet", "time", "add", "trophy", "person"];

  let primaryColor = colors.navdefault;
  let greyColor = colors.navdefault;

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;

        let isFocused = state.index === index;

        if (!isFocused) {
          icons[index] = icons[index] + "-outline";
        }

        let isFocusedColor = isFocused ? primaryColor : greyColor;

        const onPress = () => {
          if (route.name === "Add") {
            navigation.navigate("CreateQuiz");
            return false;
          }

          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          if (route.name === "Add") {
            navigation.navigate("CreateQuiz");
            return false;
          }
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        if (label === "Add") {
          isFocusedColor = colors.white;
        }

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={label === "Add" ? styles.addItem : {}}>
              <Ionicons name={icons[index]} size={28} color={isFocusedColor} />
            </View>

            {label != "Add" && (
              <Text
                style={{
                  color: isFocusedColor,
                  fontFamily: isFocused ? "nunbold" : "nunregular",
                  fontSize: 12,
                }}>
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    marginHorizontal: 0,
    paddingVertical: Platform.OS === "ios" ? 32 : 12,
    borderTopColor: "#e9e9e9",
    borderTopWidth: 0.7,
    //borderRadius: 0,
    //borderCurve: "circular",
    //shadowColor: "black",
    //shadowOffset: { width: 0, height: 10 },
    //shadowRadius: 10,
    //elevation: 4,
    //shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  addItem: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    height: "100%",
    aspectRatio: 1,
    borderRadius: 100,
    borderCurve: "circular",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 40,
    shadowOpacity: 0,
    elevation: 5,
  },
});

export default MyTabBar;
