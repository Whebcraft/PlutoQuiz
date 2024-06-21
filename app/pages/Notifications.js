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

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../components/styles";
import colors from "../components/colors";

export default function Notifications({ navigation, route }) {
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
                <Text style={styles.headerTitle}>Notifications</Text>
                <TouchableOpacity></TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.notificationsViewFlex}>
            <View style={styles.notificationsView}>
              <Pressable style={styles.notificationsListItem}>
                <View>
                  <Image
                    source={require("../../assets/planet-uranus.png")}
                    style={styles.boardListItemImg}
                  />
                </View>
                <View style={styles.flex_one}>
                  <View style={styles.notificationsListItemTop}>
                    <Text style={styles.notificationsListItemTitle}>
                      Notification Title
                    </Text>
                    <Text style={styles.notificationsListItemDate}>
                      2 days ago
                    </Text>
                  </View>
                  <Text style={styles.notificationsListItemContent}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </Text>
                </View>
              </Pressable>

              <Pressable style={styles.notificationsListItem}>
                <View>
                  <Image
                    source={require("../../assets/rocket.png")}
                    style={styles.boardListItemImg}
                    contentFit="contain"
                  />
                </View>
                <View style={styles.flex_one}>
                  <Text style={styles.notificationsListItemTitle}>
                    Notification Title
                  </Text>
                  <Text style={styles.notificationsListItemContent}>
                    Notification sample text
                  </Text>
                </View>
                <View>
                  <Text style={styles.notificationsListItemDate}>
                    2 minutes ago
                  </Text>
                </View>
              </Pressable>

              <Pressable style={styles.notificationsListItem}>
                <View>
                  <Image
                    source={require("../../assets/rocket.png")}
                    style={styles.boardListItemImg}
                    contentFit="contain"
                  />
                </View>
                <View style={styles.flex_one}>
                  <Text style={styles.notificationsListItemTitle}>
                    Notification Title
                  </Text>
                  <Text style={styles.notificationsListItemContent}>
                    Notification sample text
                  </Text>
                </View>
                <View>
                  <Text style={styles.notificationsListItemDate}>
                    2 minutes ago
                  </Text>
                </View>
              </Pressable>

              <Pressable style={styles.notificationsListItem}>
                <View>
                  <Image
                    source={require("../../assets/rocket.png")}
                    style={styles.boardListItemImg}
                    contentFit="contain"
                  />
                </View>
                <View style={styles.flex_one}>
                  <Text style={styles.notificationsListItemTitle}>
                    Notification Title
                  </Text>
                  <Text style={styles.notificationsListItemContent}>
                    Notification sample text
                  </Text>
                </View>
                <View>
                  <Text style={styles.notificationsListItemDate}>
                    2 minutes ago
                  </Text>
                </View>
              </Pressable>

              <Pressable style={styles.notificationsListItem}>
                <View>
                  <Image
                    source={require("../../assets/rocket.png")}
                    style={styles.boardListItemImg}
                    contentFit="contain"
                  />
                </View>
                <View style={styles.flex_one}>
                  <Text style={styles.notificationsListItemTitle}>
                    Notification Title
                  </Text>
                  <Text style={styles.notificationsListItemContent}>
                    Notification sample text
                  </Text>
                </View>
                <View>
                  <Text style={styles.notificationsListItemDate}>
                    2 minutes ago
                  </Text>
                </View>
              </Pressable>

              <Pressable style={styles.notificationsListItem}>
                <View>
                  <Image
                    source={require("../../assets/rocket.png")}
                    style={styles.boardListItemImg}
                    contentFit="contain"
                  />
                </View>
                <View style={styles.flex_one}>
                  <Text style={styles.notificationsListItemTitle}>
                    Notification Title
                  </Text>
                  <Text style={styles.notificationsListItemContent}>
                    Notification sample text
                  </Text>
                </View>
                <View>
                  <Text style={styles.notificationsListItemDate}>
                    2 minutes ago
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
