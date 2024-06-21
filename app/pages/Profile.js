import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";
import * as Application from "expo-application";

import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";
import { styles } from "../components/styles";
import colors from "../components/colors";

export function Profile({ navigation, route }) {
  const [appVersion, setAppVersion] = useState("v1 (1.0.0)");

  const getAppVersion = async () => {
    try {
      const version = Application.nativeApplicationVersion;
      const buildVersion = Application.nativeBuildVersion;

      setAppVersion(
        version !== null ? `v${version} (${buildVersion})` : appVersion
      );
    } catch (error) {}
  };

  useEffect(() => {
    getAppVersion();
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.ScrollFlex}>
        <View style={styles.ViewScrollFlex}>
          <View style={styles.authBlockNoCurve}>
            <Image
              contentFit="cover"
              source={require("../../assets/card-pattern.png")}
              style={styles.authBlockbg}
            />
            <View>
              <View style={styles.headerTop}>
                <TouchableOpacity></TouchableOpacity>
                <Text style={styles.headerTitle}>{route.name}</Text>
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
            </View>
          </View>
          <View
            style={[
              styles.pageViewFlex,
              {
                marginHorizontal: 0,
                flexGrow: 1,
                elevation: 0,
                flex: 1,
                backgroundColor: "#f2f7fd",
              },
            ]}>
            <View style={styles.profileView}>
              <Image
                source={require("../../assets/me1.png")}
                style={styles.profileIcon}
              />
              <View>
                <Text style={styles.profileName}>Lucky Onagite</Text>
                <View style={styles.profileEdit}>
                  <Feather name="edit" size={16} color={colors.primary} />
                  <Text style={styles.profileEditText}>Edit Profile</Text>
                </View>
              </View>
            </View>

            <View style={styles.badgeView}>
              <LinearGradient
                colors={["#5a6fee", colors.orange]}
                style={styles.badgeGradient}>
                <Text style={styles.badgePoint}>7K</Text>
                <Text style={styles.badgePointName}>World Rank</Text>
                <Image
                  source={require("../../assets/18.png")}
                  style={styles.badgePointImage}
                />
              </LinearGradient>

              <LinearGradient
                colors={["#5124ea", colors.primary]}
                style={styles.badgeGradient}>
                <Text style={styles.badgePoint}>1K</Text>
                <Text style={styles.badgePointName}>Local Rank</Text>
                <Image
                  source={require("../../assets/29.png")}
                  style={styles.badgePointImage}
                />
              </LinearGradient>

              <LinearGradient
                colors={["#5a6fee", colors.secondary]}
                style={styles.badgeGradient}>
                <Text style={styles.badgePoint}>5K</Text>
                <Text style={styles.badgePointName}>Total Score</Text>
                <Image
                  source={require("../../assets/30.png")}
                  style={styles.badgePointImage}
                />
              </LinearGradient>
            </View>

            <View style={{ marginBottom: 30, marginTop: 10 }}>
              <View style={styles.profileList}>
                <TouchableOpacity style={styles.profileListItem}>
                  <View style={styles.profileListItemIcon}>
                    <Ionicons
                      name="share-social-outline"
                      size={22}
                      color={colors.white}
                    />
                  </View>

                  <Text style={styles.profileListItemText}>Refer a friend</Text>

                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={"#545458"}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.profileListItem}>
                  <View style={styles.profileListItemIcon}>
                    <Ionicons
                      name="settings-outline"
                      size={22}
                      color={colors.white}
                    />
                  </View>
                  <Text style={styles.profileListItemText}>Settings</Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={"#545458"}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.profileListItem}
                  onPress={() => navigation.navigate("Onboarding")}>
                  <View
                    style={[
                      styles.profileListItemIcon,
                      { backgroundColor: "#fdf1f1" },
                    ]}>
                    <Ionicons
                      name="log-out-outline"
                      size={22}
                      color={"#e32f2f"}
                    />
                  </View>
                  <Text style={styles.profileListItemText}>Logout</Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={"#545458"}
                  />
                </TouchableOpacity>

                <View style={styles.buildInfo}>
                  <Text style={styles.buildVersion}>Version {appVersion}</Text>
                  <Pressable
                    onPress={() =>
                      Linking.openURL("https://www.facebook.com/whebcraft/")
                    }>
                    <Text style={styles.developer}>
                      Created By Lucky Onagite
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
