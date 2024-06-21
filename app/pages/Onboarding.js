import React, { useState, useEffect, useRef } from "react";
import { styles } from "../components/styles";
import colors from "../components/colors";

import Swiper from "react-native-swiper";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { View, Image, Animated, TouchableOpacity, Text } from "react-native";

export default function Onboarding({ navigation }) {
  const swiperRef = useRef(null);
  let [activeSlide, setActiveSlide] = useState(0);

  const [animatedValue] = useState(new Animated.Value(0));
  const [animationStarted, setAnimationStarted] = useState(false);

  const slides = [
    {
      slide_image: require("../../assets/planet-uranus.png"),
      slide_heading: "Welcome to PlutoQuiz",
      slide_caption:
        "Test your knowledge and earn points with PlutoQuiz, the ultimate app for quiz enthusiasts.",
    },
    {
      slide_image: require("../../assets/6.png"),
      slide_heading: "Diverse Topics Await",
      slide_caption:
        "Challenge yourself with quizzes on various topics, expand your horizons with PlutoQuiz.",
    },
    {
      slide_image: require("../../assets/30.png"),
      slide_heading: "Climb the Leaderboard",
      slide_caption:
        "Compete with others on the leaderboard, prove your knowledge and become a top scorer on PlutoQuiz!",
    },
  ];

  function skip() {
    navigation.navigate("Signup");
  }

  function next() {
    if (activeSlide === 2) {
      navigation.navigate("Signup");
    } else {
      swiperRef.current.scrollBy(1, true);
    }
  }

  const handleIndexChanged = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    if (!animationStarted) {
      animatedValue.setValue(activeSlide);
    }
  }, [activeSlide, animationStarted]);

  const renderSlides = () => {
    return slides.map((slide, index) => (
      <View key={index} style={styles.slidecontainer}>
        <Animated.View>
          <View style={styles.slide_shadow}>
            <View style={styles.slide_imagecover}>
              <Image
                resizeMode="center"
                source={slide.slide_image}
                style={styles.slide_image}
              />
            </View>
          </View>

          <View style={styles.slidecontent}>
            <Text style={styles.slide_heading}>{slide.slide_heading}</Text>
            <Text style={styles.slide_caption}>{slide.slide_caption}</Text>

            <View style={styles.pagination}>
              {slides.map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.pagDot,
                    i === activeSlide && styles.pagDotActive,
                  ]}
                />
              ))}
            </View>
          </View>
        </Animated.View>
      </View>
    ));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.onBoardingUI}>
        <Swiper
          ref={swiperRef}
          loop={false}
          showsPagination={false}
          dotStyle={{ width: 0, height: 0 }}
          onIndexChanged={handleIndexChanged}>
          {renderSlides()}
        </Swiper>
        <View style={styles.onboardingactions}>
          <TouchableOpacity style={styles.skipbtn} onPress={skip}>
            <Text style={styles.skipbtnText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.nextBtn} onPress={next}>
            <Text style={styles.nextBtnText}>
              {activeSlide === 2 ? (
                "Get Started"
              ) : (
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color={colors.white}
                />
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
