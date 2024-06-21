import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import { ScrollView, Alert } from "react-native";

import { styles } from "../components/styles";
import Loader from "../components/Loader";
import QuizTaker from "../components/QuizTaker";
import { getRandomQuestions } from "../functions/AppFunctions";

export default function StartQuiz({ navigation, route }) {
  const { quiz_id } = route.params || {};

  const [quizid, setquizid] = useState(quiz_id ? quiz_id : null);
  const [isLoading, setisLoading] = useState(quiz_id ? true : false);

  const CheckQuizID = () => {
    if (quizid === null) {
      Alert.alert("Error", "Quiz ID must be filled.");
      return false;
    }

    setisLoading(true);

    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (quiz_id) {
      CheckQuizID();
    }
  }, [quiz_id]);

  const questions = getRandomQuestions(10);

  return (
    <>
      <StatusBar style="light" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.ScrollFlex}>
        <QuizTaker questions={questions} timer={2} navigation={navigation} />
        <Loader isLoading={isLoading} />
      </ScrollView>
    </>
  );
}
