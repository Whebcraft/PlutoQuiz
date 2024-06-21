import React from "react";
import { StatusBar } from "expo-status-bar";

import { Image } from "expo-image";

import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../components/styles";
import colors from "../components/colors";

export function History({ navigation, route }) {
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
                <View></View>
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
          <View style={styles.pageViewFlex}>
            <TouchableOpacity style={styles.notificationItem}>
              <View style={styles.notificationItemIcon}>
                <Ionicons name="notifications" size={22} color={colors.white} />
              </View>
              <View>
                <Text style={styles.notificationItemText}>
                  Marketing Strategy
                </Text>
                <Text style={styles.notificationItemSubText}>
                  12 Friends Participate in this Quiz
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.notificationItem}>
              <View style={styles.notificationItemIcon}>
                <Ionicons name="notifications" size={22} color={colors.white} />
              </View>
              <View>
                <Text style={styles.notificationItemText}>
                  Marketing Strategy
                </Text>
                <Text style={styles.notificationItemSubText}>
                  12 Friends Participate in this Quiz
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.notificationItem}>
              <View style={styles.notificationItemIcon}>
                <Ionicons name="notifications" size={22} color={colors.white} />
              </View>
              <View>
                <Text style={styles.notificationItemText}>
                  Marketing Strategy
                </Text>
                <Text style={styles.notificationItemSubText}>
                  12 Friends Participate in this Quiz
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.notificationItem}>
              <View style={styles.notificationItemIcon}>
                <Ionicons name="notifications" size={22} color={colors.white} />
              </View>
              <View>
                <Text style={styles.notificationItemText}>
                  Marketing Strategy
                </Text>
                <Text style={styles.notificationItemSubText}>
                  12 Friends Participate in this Quiz
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.notificationItem}>
              <View style={styles.notificationItemIcon}>
                <Ionicons name="notifications" size={22} color={colors.white} />
              </View>
              <View>
                <Text style={styles.notificationItemText}>
                  Marketing Strategy
                </Text>
                <Text style={styles.notificationItemSubText}>
                  12 Friends Participate in this Quiz
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
