import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import { Image } from "expo-image";

import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../components/styles";
import colors from "../components/colors";

import { LinearGradient } from "expo-linear-gradient";

export default function QuizBuilderFinish({ navigation, route }) {
  const { data } = route.params;

  const goHome = () => {
    navigation.navigate("Main");
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        goHome();
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          colors={[colors.primary, colors.primary, "#5124ea"]}
          style={styles.builderFinishPage}>
          <View style={styles.builderFinishImageView}>
            <Image
              source={require("../../assets/15.png")}
              style={styles.builderFinishImage}
            />
          </View>
          <View style={styles.builderFinishPageView}>
            <Text style={styles.quizEndTitle}>Quiz Created!</Text>

            <View style={styles.builderFinishListView}>
              <View style={styles.builderFinishListItem}>
                <Text style={styles.builderFinishItemName}>Quiz ID</Text>
                <Text style={styles.builderFinishItemVal}>{data.quiz_id}</Text>
              </View>

              <View style={styles.builderFinishListItem}>
                <Text style={styles.builderFinishItemName}>Quiz Name</Text>
                <Text style={styles.builderFinishItemVal}>
                  {data.quiz_name}
                </Text>
              </View>

              <View style={styles.builderFinishListItem}>
                <Text style={styles.builderFinishItemName}>Questions</Text>
                <Text style={styles.builderFinishItemVal}>
                  {data.no_of_questions}
                </Text>
              </View>

              <View style={styles.builderFinishListItem}>
                <Text style={styles.builderFinishItemName}>Duration</Text>
                <Text style={styles.builderFinishItemVal}>{data.duration}</Text>
              </View>

              <View
                style={[
                  styles.builderFinishListItem,
                  { borderBottomWidth: 0 },
                ]}>
                <Text style={styles.builderFinishItemName}>Invite Link</Text>
                <Text style={styles.builderFinishItemVal}>{data.link}</Text>
              </View>
            </View>

            <View style={styles.sideBtns}>
              <TouchableOpacity
                style={[
                  styles.appBtn,
                  { flex: 1, backgroundColor: colors.secondary },
                ]}
                onPress={goHome}>
                <Text style={styles.appBtnText}>Share Link</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.appBtn, { flex: 1 }]}
                onPress={goHome}>
                <Text style={styles.appBtnText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </>
  );
}
