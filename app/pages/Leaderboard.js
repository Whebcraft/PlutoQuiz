import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { Image } from "expo-image";

import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../components/styles";
import colors from "../components/colors";

export function Leaderboard({ navigation, route }) {
  const [tabs, settabs] = useState(2);

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

              <View style={styles.lboardTabs}>
                <TouchableOpacity
                  style={
                    tabs === 1
                      ? styles.lboardTabsitemactive
                      : styles.lboardTabsitem
                  }
                  onPress={() => settabs(1)}>
                  <Text style={styles.lboardTabsitemtext}>Local</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    tabs === 2
                      ? styles.lboardTabsitemactive
                      : styles.lboardTabsitem
                  }
                  onPress={() => settabs(2)}>
                  <Text style={styles.lboardTabsitemtext}>Global</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    tabs === 3
                      ? styles.lboardTabsitemactive
                      : styles.lboardTabsitem
                  }
                  onPress={() => settabs(3)}>
                  <Text style={styles.lboardTabsitemtext}>Friend</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.boardImageView}>
                <View style={styles.boardlead}>
                  <Image
                    source={require("../../assets/me2.png")}
                    style={[
                      styles.boardImages,
                      {
                        width: 70,
                        height: 70,
                        borderColor: "#f6680f",
                      },
                    ]}
                  />
                  <View style={styles.boardBadge}>
                    <Text style={styles.boardBadgeText}>2</Text>
                  </View>
                  <Text style={styles.boardName}>Liza</Text>
                  <Text style={styles.boardScore}>5,620</Text>
                </View>

                <View style={styles.boardlead}>
                  <Image
                    source={require("../../assets/me.png")}
                    style={[
                      styles.boardImages,
                      {
                        borderColor: "#0ad30a",
                      },
                    ]}
                  />
                  <View style={styles.boardBadge}>
                    <Text style={styles.boardBadgeText}>1</Text>
                  </View>
                  <Text style={styles.boardName}>Carter</Text>
                  <Text style={styles.boardScore}>8,832</Text>
                </View>

                <View style={styles.boardlead}>
                  <Image
                    source={require("../../assets/me1.png")}
                    style={[
                      styles.boardImages,
                      {
                        width: 70,
                        height: 70,
                        borderColor: "#0cbce1",
                      },
                    ]}
                  />
                  <View style={styles.boardBadge}>
                    <Text style={styles.boardBadgeText}>3</Text>
                  </View>
                  <Text style={styles.boardName}>Dutton</Text>
                  <Text style={styles.boardScore}>5,230</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.boardList}>
            <TouchableOpacity style={styles.boardListItem}>
              <View style={styles.boardListItemView}>
                <Text style={styles.boardListItemCount}>4</Text>
              </View>
              <View style={styles.boardListItemImgView}>
                <Image
                  source={require("../../assets/me1.png")}
                  style={styles.boardListItemImg}
                />
                <Text style={styles.boardListItemName}>Kyle Hawkins</Text>
              </View>
              <View>
                <Text style={styles.boardListItemScore}>5,230</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boardListItem}>
              <View style={styles.boardListItemView}>
                <Text style={styles.boardListItemCount}>5</Text>
              </View>
              <View style={styles.boardListItemImgView}>
                <Image
                  source={require("../../assets/me2.png")}
                  style={styles.boardListItemImg}
                />
                <Text style={styles.boardListItemName}>Adam Smith</Text>
              </View>
              <View>
                <Text style={styles.boardListItemScore}>4,568</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boardListItem}>
              <View style={styles.boardListItemView}>
                <Text style={styles.boardListItemCount}>6</Text>
              </View>
              <View style={styles.boardListItemImgView}>
                <Image
                  source={require("../../assets/me.png")}
                  style={styles.boardListItemImg}
                />
                <Text style={styles.boardListItemName}>Micheal Hopkins</Text>
              </View>
              <View>
                <Text style={styles.boardListItemScore}>2,368</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
