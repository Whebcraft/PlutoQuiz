import React from "react";
import { styles } from "../components/styles";
import colors from "../components/colors";

import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from "react-native";

export default function ForgotPassword({ navigation }) {
  return (
    <>
      <StatusBar style="light" />
      <ScrollView style={styles.authPage}>
        <View style={styles.authBlock}>
          <Image
            resizeMode="cover"
            source={require("../../assets/card-pattern.png")}
            style={styles.authBlockbg}
          />
          <Image
            resizeMode="center"
            source={require("../../assets/app-logo.png")}
            style={styles.applogo}
          />
          <Text style={styles.authIntro}>Forgot Password</Text>
          <View style={styles.authSummaryBlock}>
            <Text style={styles.authSummaryText}>
              Forgot your password? Don't worry
            </Text>
          </View>
        </View>
        <View style={styles.boxstyles} />
        <View style={styles.boxstyle1} />
        <View style={styles.scrollbg}>
          <View style={styles.formbox}>
            <Text style={styles.formlabel}>Email</Text>
            <View>
              <Ionicons
                style={styles.formicon}
                name="mail-outline"
                size={20}
                color={colors.inputcolor}
              />
              <TextInput
                style={styles.formInput}
                underlineColorAndroid="transparent"
                placeholder="lucky@luckyonagite.com"
                inputMode="email"
                placeholderTextColor={colors.inputcolor}
              />
            </View>
          </View>

          <View style={styles.formbtn}>
            <TouchableOpacity
              style={styles.appBtn}
              onPress={() => navigation.navigate("Main")}>
              <Text style={styles.appBtnText}>Recover Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
