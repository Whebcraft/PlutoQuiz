import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";

import { Image } from "expo-image";

import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import LottieView from "lottie-react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../components/styles";
import colors from "../components/colors";

export default function Challenge({ navigation, route }) {
  const animation = useRef(null);

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.AppHeader}>
        <TouchableOpacity
          style={styles.headerTouchIcon}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={20} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Start Group Quiz</Text>
        <View></View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.ScrollFlex}>
        <View style={styles.pageCentered}>
          <View style={styles.ChallangeView}>
            <LottieView
              ref={animation}
              style={styles.scanImg}
              source={require("../../assets/scan.json")}
              autoPlay
              loop={true}
            />

            <View style={styles.findIconImage}>
              <Image
                source={require("../../assets/me.png")}
                style={styles.ChallangeIcon}
              />
            </View>
          </View>

          <View
            style={[
              styles.formbtn,
              {
                marginHorizontal: 30,
                marginTop: 10,
              },
            ]}>
            <TouchableOpacity style={styles.appBtn}>
              <Text style={styles.appBtnText}>Searching for friends...</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
