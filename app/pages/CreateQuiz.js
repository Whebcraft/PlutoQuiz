import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../components/styles";
import colors from "../components/colors";

export default function CreateQuiz({ navigation, route }) {
  const [questionName, setquestionName] = useState(null);
  const [questionType, setquestionType] = useState(null);
  const [numberOfQuestion, setnumberOfQuestion] = useState(1);
  const [quizDuration, setquizDuration] = useState(null);

  const QuizBuilder = () => {
    // Validate before passing to next page.

    if (quizDuration === null) {
      Alert.alert("Validation Error", "Quiz Duration must be set.");
      return false;
    }

    if (questionName === null) {
      Alert.alert("Validation Error", "Question Name must be filled.");
      return false;
    }

    if (questionType === null) {
      Alert.alert("Validation Error", "Question Type must be set.");
      return false;
    }

    navigation.navigate("QuizBuilder", {
      quiz_name: questionName,
      quiz_type: questionType,
      no_of_questions: parseInt(numberOfQuestion),
      duration: quizDuration,
    });
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
                <Text style={styles.headerTitle}>New Quiz</Text>
                <View></View>
              </View>
            </View>
          </View>
          <View style={styles.pageViewFlex}>
            <View style={styles.formbox}>
              <Text style={styles.formlabel}>Quiz Name</Text>
              <View>
                <Ionicons
                  style={styles.formicon}
                  name="planet-outline"
                  size={20}
                  color={colors.inputcolor}
                />
                <TextInput
                  style={styles.formInput}
                  underlineColorAndroid="transparent"
                  placeholder="Enter Quiz Name"
                  inputMode="text"
                  placeholderTextColor={colors.inputcolor}
                  value={questionName}
                  onChangeText={(text) => setquestionName(text)}
                />
              </View>
            </View>

            <View style={styles.formbox}>
              <Text style={styles.formlabel}>Number of Questions</Text>
              <View>
                <Picker
                  itemStyle={{ height: 50 }}
                  style={styles.formInputNoIcon}
                  selectedValue={numberOfQuestion}
                  onValueChange={(itemValue, itemIndex) =>
                    setnumberOfQuestion(itemValue)
                  }>
                  {Array.from({ length: 20 }, (_, i) => (
                    <Picker.Item
                      key={i + 1}
                      label={`${i + 1}`}
                      value={`${i + 1}`}
                    />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={styles.formbox}>
              <Text style={styles.formlabel}>Question Type</Text>
              <View>
                <Picker
                  itemStyle={{ height: 50 }}
                  style={styles.formInputNoIcon}
                  selectedValue={questionType}
                  onValueChange={(itemValue, itemIndex) =>
                    setquestionType(itemValue)
                  }>
                  <Picker.Item label="Select Question Type" value="" />
                  <Picker.Item
                    label="Multiple Select Choice"
                    value="Multiple Select"
                  />
                  <Picker.Item
                    label="Single Select Choice"
                    value="Single Select"
                  />
                </Picker>
              </View>
            </View>

            <View style={styles.formbox}>
              <Text style={styles.formlabel}>Quiz Duration</Text>
              <View>
                <Picker
                  itemStyle={{ height: 50 }}
                  style={styles.formInputNoIcon}
                  selectedValue={quizDuration}
                  onValueChange={(itemValue, itemIndex) =>
                    setquizDuration(itemValue)
                  }>
                  <Picker.Item label="Select Duration" value="" />
                  <Picker.Item label="2 Minutes" value="2 Minutes" />
                  <Picker.Item label="5 Minutes" value="5 Minutes" />
                  <Picker.Item label="10 Minutes" value="10 Minutes" />
                  <Picker.Item label="15 Minutes" value="15 Minutes" />
                </Picker>
              </View>
            </View>

            <View style={styles.formbox}>
              <TouchableOpacity style={styles.appBtn} onPress={QuizBuilder}>
                <Text style={styles.appBtnText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
