import React from "react";
import { StatusBar } from "expo-status-bar";

import { Image } from "expo-image";

import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../components/styles";
import colors from "../components/colors";

export function Home({ navigation, route }) {
  const startQuiz = () => {
    navigation.navigate("JoinQuiz", { quiz_id: "123456" });
  };

  return (
    <>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.ScrollFlex}>
        <View style={styles.ViewScrollFlex}>
          <View style={styles.authBlock}>
            <Image
              contentFit="cover"
              source={require("../../assets/card-pattern.png")}
              style={styles.authBlockbg}
            />
            <View>
              <View style={styles.headerTop}>
                <TouchableOpacity
                  style={styles.headerTouchIcon}
                  onPress={() => navigation.navigate("Profile")}>
                  <Image
                    source={require("../../assets/me1.png")}
                    style={styles.headerTopImg}
                  />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>PlutoQuiz</Text>
                <TouchableOpacity
                  style={styles.headerTouchIcon}
                  onPress={() => navigation.navigate("Notifications")}>
                  <Ionicons
                    name="notifications"
                    size={20}
                    color={colors.white}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.headerSummaryBlock}>
                <Text style={styles.headerSummaryText}>Welcome Back!</Text>
                <Text style={styles.headerIntro}>Lucky Onagite</Text>
              </View>
            </View>
          </View>
          <View style={styles.createActions}>
            <ScrollView
              horizontal
              contentContainerStyle={styles.createActionsSlide}
              showsHorizontalScrollIndicator={false}>
              <Pressable onPress={() => navigation.navigate("CreateQuiz")}>
                <LinearGradient
                  colors={["#ff7f64", "#ff565f", "#ff628c"]}
                  style={styles.createItem}>
                  <Text style={styles.createItemTitle}>Create</Text>
                  <Text style={styles.createItemSubtitle}>Quiz</Text>
                  <View style={styles.createItemBtn}>
                    <Ionicons
                      name="arrow-forward"
                      size={26}
                      color={colors.orange}
                    />
                  </View>
                </LinearGradient>
              </Pressable>

              <Pressable onPress={() => navigation.navigate("JoinQuiz")}>
                <LinearGradient
                  colors={["#61b9ff", "#5776ff", "#726bff"]}
                  style={styles.createItem}>
                  <Text style={styles.createItemTitle}>Join</Text>
                  <Text style={styles.createItemSubtitle}>Quiz</Text>
                  <View style={styles.createItemBtn}>
                    <Ionicons
                      name="arrow-forward"
                      size={26}
                      color={"#5776ff"}
                    />
                  </View>
                </LinearGradient>
              </Pressable>

              <Pressable onPress={() => navigation.navigate("Challenge")}>
                <LinearGradient
                  colors={["#5bc842", "#5bc842", "#67d99b"]}
                  style={styles.createItem}>
                  <Text style={styles.createItemTitle}>Challenge</Text>
                  <Text style={styles.createItemSubtitle}>Friends</Text>
                  <View style={styles.createItemBtn}>
                    <Ionicons
                      name="arrow-forward"
                      size={26}
                      color={"#5bc842"}
                    />
                  </View>
                </LinearGradient>
              </Pressable>
            </ScrollView>

            <View style={styles.viewHomeItems}>
              <View style={styles.viewHomeItemsTop}>
                <Text style={styles.viewHomeItemsTopTitle}>
                  Choose Categories
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Categories")}>
                  <Text style={styles.viewHomeItemsTopSubTitle}>See All</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.viewHomeItemsBox}>
                <TouchableOpacity
                  style={styles.viewHomeItem}
                  onPress={startQuiz}>
                  <Image
                    source={require("../../assets/rocket.png")}
                    style={styles.viewHomeItem3dImage}
                  />
                  <Text style={styles.viewHomeItemText}>Science</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.viewHomeItem}
                  onPress={startQuiz}>
                  <Image
                    source={require("../../assets/planet-uranus.png")}
                    style={styles.viewHomeItem3dImage}
                  />
                  <Text style={styles.viewHomeItemText}>Geography</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.viewHomeItemsBox, { marginBottom: 68 }]}>
                <TouchableOpacity
                  style={styles.viewHomeItem}
                  onPress={startQuiz}>
                  <Image
                    source={require("../../assets/american-football.png")}
                    style={styles.viewHomeItem3dImage}
                  />
                  <Text style={styles.viewHomeItemText}>Sports</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.viewHomeItem}
                  onPress={startQuiz}>
                  <Image
                    source={require("../../assets/microscope.png")}
                    style={styles.viewHomeItem3dImage}
                  />
                  <Text style={styles.viewHomeItemText}>Biology</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
