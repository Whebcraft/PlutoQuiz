import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  BackHandler,
} from "react-native";

import { Image } from "expo-image";

import { styles } from "./styles";
import colors from "./colors";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { getQuizResultMessage } from "../functions/AppFunctions";

const initialQuestionData = {
  question: "",
  answers: ["", "", "", ""],
  selectedAnswer: null,
};

const QuizTaker = ({ navigation, questions, timer }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(
    questions.map((q) => ({ ...initialQuestionData, ...q }))
  );
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(timer * 60); // Convert minutes to seconds

  const timerRef = useRef(null);

  const goHome = () => {
    navigation.navigate("Main");
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (modalVisible) {
          setModalVisible(!modalVisible);
        }
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex].selectedAnswer = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    clearInterval(timerRef.current);
    let calculatedScore = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    answers.forEach((answer, index) => {
      if (answer.selectedAnswer === questions[index].correctAnswer) {
        calculatedScore++;
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    });
    setScore({ calculatedScore, correctAnswers, incorrectAnswers });
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  let quizData = getQuizResultMessage(
    questions.length,
    score ? score.correctAnswers : 0
  );

  return (
    <View
      style={{
        flex: 1,
      }}>
      {score === null ? (
        <>
          <View style={styles.ViewScrollFlex}>
            <View style={styles.authBlockNoCurve}>
              <View style={styles.startquizView}>
                <Text style={styles.startquizTitle}>
                  Question {currentQuestionIndex + 1}
                </Text>

                <View style={styles.timerbadge}>
                  <Ionicons name="timer" size={20} color={colors.white} />

                  <Text style={styles.timerbadgeText}>
                    {formatTime(timeLeft)}
                  </Text>
                </View>
              </View>

              <View style={styles.questionPagination}>
                {questions.map((_, index) => (
                  <View
                    key={index}
                    style={
                      index === currentQuestionIndex
                        ? styles.questionPagActive
                        : styles.questionPagDefault
                    }></View>
                ))}
              </View>
            </View>

            <View style={styles.pageViewFlex}>
              <Text style={styles.quizQuestionTitle}>
                {answers[currentQuestionIndex].question}
              </Text>

              <View style={styles.quizQuestionAnswers}>
                {answers[currentQuestionIndex].answers.map(
                  (answer, answerIndex) => (
                    <TouchableOpacity
                      key={answerIndex}
                      onPress={() =>
                        handleAnswerSelect(currentQuestionIndex, answerIndex)
                      }
                      style={
                        answers[currentQuestionIndex].selectedAnswer ===
                        answerIndex
                          ? styles.ansSel
                          : styles.ansDefault
                      }>
                      <Text style={styles.quizQuestionAnswersList}>
                        {answer}
                      </Text>

                      {answers[currentQuestionIndex].selectedAnswer ===
                      answerIndex ? (
                        <Ionicons
                          name="checkmark-circle"
                          size={28}
                          color={colors.secondary}
                        />
                      ) : (
                        <View style={styles.answerDefault} />
                      )}
                    </TouchableOpacity>
                  )
                )}
              </View>

              <View style={[styles.navigationButtons, { marginTop: 50 }]}>
                <TouchableOpacity
                  onPress={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  style={
                    currentQuestionIndex != 0
                      ? styles.SlideBtn
                      : styles.SlideBtnDisabled
                  }>
                  <Ionicons
                    name="chevron-back"
                    size={20}
                    color={
                      currentQuestionIndex != 0 ? colors.white : colors.dim2
                    }
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleNext}
                  disabled={currentQuestionIndex === questions.length - 1}
                  style={
                    currentQuestionIndex === questions.length - 1
                      ? styles.SlideBtnDisabled
                      : styles.SlideBtn
                  }>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={
                      currentQuestionIndex === questions.length - 1
                        ? colors.dim2
                        : colors.white
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={[
                styles.navigationButtons,
                {
                  marginHorizontal: 12,
                  marginTop: 30,
                  flexDirection: "column",
                },
              ]}>
              <TouchableOpacity style={styles.appBtn} onPress={handleSubmit}>
                <Text style={styles.appBtnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <>
          <LinearGradient
            colors={[colors.primary, colors.primary, "#5124ea"]}
            style={styles.quizEndPage}>
            <View style={styles.quizTakerFinish}>
              <View style={styles.quizTakerFinishImgView}>
                {quizData.failed ? (
                  <Image
                    source={require("../../assets/32.png")}
                    style={styles.quizTakerFinishImg}
                  />
                ) : (
                  <Image
                    source={require("../../assets/30.png")}
                    style={styles.quizTakerFinishImg}
                  />
                )}
              </View>

              <View style={styles.quizEndBox}>
                <Text style={styles.quizEndTitle}>{quizData.title}</Text>

                <Text style={styles.quizEndSubTitle}>{quizData.text}</Text>

                <View style={styles.quizTakerFinishScoreBoard}>
                  <View style={styles.quizTakerFinishBoardItem}>
                    <Text style={styles.quizTakerFinishBoardItemTitle}>
                      {questions.length}
                    </Text>
                    <Text style={styles.quizTakerFinishBoardItemTitleName}>
                      Question
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.quizTakerFinishBoardItem,
                      { backgroundColor: "#17de7a" },
                    ]}>
                    <Text style={styles.quizTakerFinishBoardItemTitle}>
                      {score.correctAnswers}
                    </Text>
                    <Text style={styles.quizTakerFinishBoardItemTitleName}>
                      Correct
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.quizTakerFinishBoardItem,
                      { backgroundColor: "#ff5f2e" },
                    ]}>
                    <Text style={styles.quizTakerFinishBoardItemTitle}>
                      {score.incorrectAnswers}
                    </Text>
                    <Text style={styles.quizTakerFinishBoardItemTitleName}>
                      Incorrect
                    </Text>
                  </View>
                </View>

                <View style={styles.ColumnBtns}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={styles.appBtn}>
                    <Text style={styles.appBtnTextIcon}>Summary</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.appBtn,
                      { backgroundColor: colors.secondary },
                    ]}
                    onPress={goHome}>
                    <Text style={styles.appBtnTextIcon}>Play Again</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>

          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.quizModal}>
              <Text style={styles.quizModalTitle}>Summary</Text>

              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.quizModalQuit}>
                <Ionicons name="close" size={28} color={colors.white} />
              </TouchableOpacity>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{
                backgroundColor: colors.primary,
              }}>
              <View style={styles.quizModalView}>
                <View>
                  {answers.map((answer, index) => (
                    <View key={index} style={styles.quizModalQuestion}>
                      <Text style={styles.quizModalQuestionTitle}>
                        Q{index + 1}: {answer.question}
                      </Text>
                      {answer.answers.map((ans, ansIndex) => (
                        <View key={ansIndex} style={styles.quizModalAnswerView}>
                          <Text
                            style={{
                              backgroundColor:
                                ansIndex === answer.selectedAnswer
                                  ? ansIndex === questions[index].correctAnswer
                                    ? "#17de7a"
                                    : "red"
                                  : ansIndex === questions[index].correctAnswer
                                  ? "#17de7a"
                                  : colors.defaultbg,
                              fontFamily: "nunbold",
                              fontSize: 14,
                              marginBottom: 8,
                              paddingHorizontal: 6,
                              paddingVertical: 3,
                              borderRadius: 8,
                              color:
                                ansIndex === answer.selectedAnswer
                                  ? ansIndex === questions[index].correctAnswer
                                    ? colors.white
                                    : colors.white
                                  : ansIndex === questions[index].correctAnswer
                                  ? colors.white
                                  : "black",
                            }}>
                            {ansIndex + 1}. {ans}
                          </Text>

                          {ansIndex === answer.selectedAnswer ? (
                            ansIndex === questions[index].correctAnswer ? (
                              <Ionicons
                                name="checkmark-done-sharp"
                                size={24}
                                color={"#17de7a"}
                              />
                            ) : (
                              <Ionicons
                                name="close-sharp"
                                size={24}
                                color={"#ff5f2e"}
                              />
                            )
                          ) : null}
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            </ScrollView>
          </Modal>
        </>
      )}
    </View>
  );
};

export default QuizTaker;
