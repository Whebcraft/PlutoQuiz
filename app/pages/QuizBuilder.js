import React from "react";
import { StatusBar } from "expo-status-bar";

import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../components/styles";
import colors from "../components/colors";

import QuizQuestionBuilder from "../components/QuizQuestionBuilder";

export default function QuizBuilder({ navigation, route }) {
  const { quiz_name, quiz_type, no_of_questions, duration } = route.params;

  const onFinish = (allQuestions) => {
    let id = Math.floor(100000 + Math.random() * 900000);

    let quizData = {
      quiz_id: id,
      quiz_name: quiz_name,
      quiz_type: quiz_type,
      no_of_questions: no_of_questions,
      duration: duration,
      questions: allQuestions,
      link: `plutoquiz.io/${id}`,
    };

    navigation.navigate("QuizBuilderFinish", { data: quizData });
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
                <Text style={styles.headerTitle}>{quiz_name}</Text>
                <TouchableOpacity></TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.pageViewFlex}>
            <QuizQuestionBuilder
              numberOfQuestions={no_of_questions}
              navigation={navigation}
              onFinish={onFinish}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
