import React from "react";
import { StatusBar } from "expo-status-bar";

import { Image } from "expo-image";

import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../components/styles";
import colors from "../components/colors";

export default function Categories({ navigation, route }) {
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
          <View style={styles.authBlockNoCurve}>
            <View>
              <View style={styles.headerTop}>
                <TouchableOpacity
                  style={styles.headerTouchIcon}
                  onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="chevron-back"
                    size={20}
                    color={colors.white}
                  />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Choose Categories</Text>
                <TouchableOpacity></TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.notificationsViewFlex,
              {
                backgroundColor: colors.defaultbg,
              },
            ]}>
            <View style={styles.viewHomeItemsBox}>
              <TouchableOpacity style={styles.viewHomeItem} onPress={startQuiz}>
                <Image
                  source={require("../../assets/rocket.png")}
                  style={styles.viewHomeItem3dImage}
                />
                <Text style={styles.viewHomeItemText}>Science</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.viewHomeItem} onPress={startQuiz}>
                <Image
                  source={require("../../assets/planet-uranus.png")}
                  style={styles.viewHomeItem3dImage}
                />
                <Text style={styles.viewHomeItemText}>Geography</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.viewHomeItemsBox}>
              <TouchableOpacity style={styles.viewHomeItem} onPress={startQuiz}>
                <Image
                  source={require("../../assets/american-football.png")}
                  style={styles.viewHomeItem3dImage}
                />
                <Text style={styles.viewHomeItemText}>Sports</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.viewHomeItem} onPress={startQuiz}>
                <Image
                  source={require("../../assets/microscope.png")}
                  style={styles.viewHomeItem3dImage}
                />
                <Text style={styles.viewHomeItemText}>Biology</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
