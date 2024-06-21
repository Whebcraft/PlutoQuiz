import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import { Image } from "expo-image";

import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../components/styles";
import colors from "../components/colors";
import Loader from "../components/Loader";

export default function JoinQuiz({ navigation, route }) {
  const { quiz_id } = route.params || {};

  const [quizid, setquizid] = useState(quiz_id ? quiz_id : null);
  const [quizLoaded, setquizLoaded] = useState(false);
  const [isLoading, setisLoading] = useState(quiz_id ? true : false);

  const CheckQuizID = () => {
    if (quizid === null) {
      Alert.alert("Error", "Quiz ID must be filled.");
      return false;
    }

    setisLoading(true);

    setTimeout(() => {
      setquizLoaded(true);
      setisLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (quiz_id) {
      CheckQuizID();
    }
  }, [quiz_id]);

  const startQuiz = () => {
    setisLoading(true);

    setTimeout(() => {
      setisLoading(false);
      navigation.navigate("StartQuiz");
    }, 3000);
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
                <Text style={styles.headerTitle}>Join Quiz</Text>
                <TouchableOpacity></TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.pageViewFlex}>
            {!quizLoaded ? (
              <>
                <View style={styles.formbox}>
                  <Text style={styles.formlabel}>Quiz ID</Text>
                  <View>
                    <TextInput
                      style={styles.formInputNoIcon}
                      underlineColorAndroid="transparent"
                      placeholder="Enter Quiz ID"
                      inputMode="numeric"
                      maxLength={10}
                      placeholderTextColor={colors.inputcolor}
                      value={quizid}
                      onChangeText={(text) => setquizid(text)}
                    />
                  </View>
                </View>

                <View style={styles.formbox}>
                  <TouchableOpacity style={styles.appBtn} onPress={CheckQuizID}>
                    <Text style={styles.appBtnText}>Continue</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <View>
                  <Text style={styles.quizFound}>Quiz Found!</Text>

                  <View style={styles.quizFoundName}>
                    <Text style={styles.quizFoundNameContent}>
                      Coding Challenge 2024
                    </Text>
                  </View>

                  <View>
                    <Text style={styles.quizFoundUser}>Created By</Text>

                    <View style={styles.quizFoundUserView}>
                      <Image
                        source={require("../../assets/me1.png")}
                        style={styles.quizFoundUserImg}
                      />
                      <View>
                        <Text style={styles.quizFoundUserName}>
                          Lucky Onagite
                        </Text>
                        <Text style={styles.quizFoundUserSubText}>Admin</Text>
                      </View>
                    </View>

                    <Text style={styles.quizFoundAbout}>About This Quiz</Text>

                    <View style={styles.quizFoundAboutContent}>
                      <View
                        style={[
                          styles.builderFinishListView,
                          { marginTop: 0 },
                        ]}>
                        <View style={styles.builderFinishListItem}>
                          <Text style={styles.builderFinishItemName}>
                            Quiz Type
                          </Text>
                          <Text style={styles.builderFinishItemVal}>
                            Single Select
                          </Text>
                        </View>

                        <View style={styles.builderFinishListItem}>
                          <Text style={styles.builderFinishItemName}>
                            Number of Questions
                          </Text>
                          <Text style={styles.builderFinishItemVal}>10</Text>
                        </View>

                        <View
                          style={[
                            styles.builderFinishListItem,
                            { borderBottomWidth: 0 },
                          ]}>
                          <Text style={styles.builderFinishItemName}>
                            Duration
                          </Text>
                          <Text style={styles.builderFinishItemVal}>
                            2 Minutes
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.formbox}>
                      <TouchableOpacity
                        style={styles.appBtn}
                        onPress={startQuiz}>
                        <Text style={styles.appBtnText}>Start Quiz</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
        <Loader isLoading={isLoading} />
      </ScrollView>
    </>
  );
}
