import React, { useState } from "react";
import { Text, View, TouchableOpacity, Alert, TextInput } from "react-native";
import { styles } from "./styles";
import colors from "./colors";

import { Ionicons } from "@expo/vector-icons";

const QuestionTab = ({ questionIndex, questionData, updateQuestionData }) => {
  const handleInputChange = (type, value, answerIndex = null) => {
    const updatedQuestionData = { ...questionData };
    if (type === "question") {
      updatedQuestionData.question = value;
    } else if (type === "answer") {
      updatedQuestionData.answers[answerIndex] = value;
    } else if (type === "selectedAnswer") {
      updatedQuestionData.selectedAnswer = answerIndex;
    }
    updateQuestionData(questionIndex, updatedQuestionData);
  };

  return (
    <View key={questionIndex}>
      <Text style={styles.BuilderTitle}>Question {questionIndex + 1}</Text>

      <View style={styles.formbox}>
        <View>
          <Text style={styles.formlabel}>Question Title</Text>
          <TextInput
            style={styles.formInputNoIcon}
            underlineColorAndroid="transparent"
            placeholder={`Quiz Question ${questionIndex + 1}`}
            inputMode="text"
            placeholderTextColor={colors.inputcolor}
            value={questionData.question}
            onChangeText={(text) => handleInputChange("question", text)}
          />
        </View>
      </View>

      <View style={styles.formbox}>
        <Text style={styles.formlabel}>Quiz Answers</Text>

        {questionData.answers.map((answer, index) => (
          <View
            style={
              questionData.selectedAnswer === index
                ? styles.answersGroup
                : styles.answersGroupRight
            }
            key={index}>
            <TextInput
              style={styles.answersInput}
              underlineColorAndroid="transparent"
              placeholder={`Enter Answer ${index + 1}`}
              inputMode="text"
              placeholderTextColor={colors.inputcolor}
              value={answer}
              onChangeText={(text) => handleInputChange("answer", text, index)}
            />
            <TouchableOpacity
              style={styles.answerCheck}
              onPress={() => handleInputChange("selectedAnswer", null, index)}>
              {questionData.selectedAnswer === index ? (
                <Ionicons
                  name="checkmark-circle"
                  size={28}
                  color={colors.secondary}
                />
              ) : (
                <View style={styles.answerDefault} />
              )}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const QuizQuestionBuilder = ({ numberOfQuestions, navigation, onFinish }) => {
  const initialQuestionData = {
    question: "",
    answers: ["", "", "", ""],
    selectedAnswer: null,
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsData, setQuestionsData] = useState(
    Array(numberOfQuestions)
      .fill()
      .map(() => ({ ...initialQuestionData }))
  );

  const handleNext = () => {
    if (currentQuestionIndex < numberOfQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const updateQuestionData = (index, newQuestionData) => {
    const updatedQuestionsData = [...questionsData];
    updatedQuestionsData[index] = newQuestionData;
    setQuestionsData(updatedQuestionsData);
  };

  const validateQuiz = () => {
    for (const question of questionsData) {
      if (!question.question.trim()) {
        Alert.alert("Validation Error", "All question title must be filled.");
        return false;
      }
      for (const answer of question.answers) {
        if (!answer.trim()) {
          Alert.alert("Validation Error", "All answers value must be filled.");
          return false;
        }
      }
      if (question.selectedAnswer === null) {
        Alert.alert(
          "Validation Error",
          "An answer must be selected for each question."
        );
        return false;
      }
    }
    return true;
  };

  const handleFinish = () => {
    if (validateQuiz()) {
      onFinish({
        num_of_questions: questionsData.length,
        data: questionsData,
      });
    }
  };

  return (
    <View>
      <QuestionTab
        questionIndex={currentQuestionIndex}
        questionData={questionsData[currentQuestionIndex]}
        updateQuestionData={updateQuestionData}
      />

      <View style={styles.navigationButtons}>
        {currentQuestionIndex != 0 ? (
          <TouchableOpacity
            onPress={handlePrevious}
            disabled={currentQuestionIndex === 0}
            style={styles.SlideBtn}>
            <Ionicons name="chevron-back" size={20} color={colors.white} />
          </TouchableOpacity>
        ) : (
          <View style={{ flex: 1 }}></View>
        )}

        {currentQuestionIndex === numberOfQuestions - 1 ? (
          <View style={{ flex: 1 }}></View>
        ) : (
          <TouchableOpacity
            onPress={handleNext}
            disabled={currentQuestionIndex === numberOfQuestions - 1}
            style={styles.SlideBtn}>
            <Ionicons name="chevron-forward" size={20} color={colors.white} />
          </TouchableOpacity>
        )}
      </View>

      {currentQuestionIndex === numberOfQuestions - 1 && (
        <View style={styles.formbox}>
          <TouchableOpacity style={styles.appBtn} onPress={handleFinish}>
            <Text style={styles.appBtnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default QuizQuestionBuilder;
