import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import colors from "./colors";

const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: "rgba(0,0,0,0.4)",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}>
          <ActivityIndicator color={colors.secondary} size="large" />
        </View>
      )}
    </>
  );
};

export default Loader;
