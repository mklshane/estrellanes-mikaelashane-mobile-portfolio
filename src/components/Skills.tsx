import { View, Text, Dimensions } from "react-native";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { styles } from "../styles/globalStyles";

const screenHeight = Dimensions.get("window").height - 450;

const skillsList = [
  { name: "JavaScript", color: "#FFD6A5" },
  { name: "React", color: "#C8B9FE" },
  { name: "React Native", color: "#BEE7E8" },
  { name: "TypeScript", color: "#FFB7C5" },
  { name: "UI/UX Design", color: "#C9EFFF" },
  { name: "Problem Solving", color: "#D0FFC3" },
];

const Skills = () => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background[1],
          width: "100%",
          height: screenHeight,
          paddingHorizontal: 25,
          justifyContent: "center", // center everything vertically
          alignItems: "center",
        },
      ]}
    >
      {/* Title */}
      <Text
        style={{
          fontSize: 60,
          fontWeight: "bold",
          color: colors.text,
          fontFamily: "PinyonScript",
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        Skills
      </Text>

      {/* Skills Grid */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {skillsList.map((skill, index) => (
          <View
            key={index}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 20,
              backgroundColor: skill.color,
              borderRadius: 20,
              borderWidth: 1.5,
              borderColor: colors.border,
              shadowColor: colors.shadow,
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 4,
              margin: 8, // spacing between cards
            }}
          >
            <Text
              style={{
                color: colors.text,
                fontWeight: "600",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {skill.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Skills;
