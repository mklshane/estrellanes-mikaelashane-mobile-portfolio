import {
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import React, { useRef, useEffect } from "react";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import { useTheme } from "../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

const Main: React.FC = () => {
  const { theme, toggleTheme, colors } = useTheme();

  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: theme === "light" ? 0 : 1,
      duration: 1000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [theme]);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }} 
        showsVerticalScrollIndicator={false}
      >
        <Profile />
        <Skills />
      </ScrollView>

      <Animated.View
        style={{
          position: "absolute",
          top: 60,
          right: 20,
          transform: [{ rotate: rotation }],
        }}
      >
        <TouchableOpacity
          onPress={toggleTheme}
          style={{
            padding: 10,
            borderRadius: 999,
            backgroundColor: colors.card,
            borderWidth: 2,
            borderColor: colors.border,
            shadowColor: colors.shadow,
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 4,
          }}
        >
          <Ionicons
            name={theme === "light" ? "moon" : "sunny"}
            size={24}
            color={colors.text}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Main;
