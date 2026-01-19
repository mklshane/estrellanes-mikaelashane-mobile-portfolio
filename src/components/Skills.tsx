import { View, Text, Dimensions } from "react-native";
import React from "react";
import { useTheme } from "@context/ThemeContext";
import { styles } from "@styles/globalStyles";

const screenHeight = Dimensions.get("window").height - 450;

const skillsList = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Python" },
  { name: "Java" },
  { name: "C++" },
  { name: "React" },
  { name: "React Native" },
    { name: "Vue" },
  { name: "Node.js" },
  { name: "FastAPI" },
  { name: "UI/UX Design" },
  { name: "Git" },
  { name: "Postman" },
  { name: "Figma" },
  { name: "Docker" },
];

const Skills: React.FC = () => {
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
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Text
        style={{
          fontSize: 70,
          fontWeight: "bold",
          color: colors.text,
          fontFamily: "PinyonScript",
          textAlign: "center",
          marginBottom: 0,
        }}
      >
        Skills
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {skillsList.map((skill, index) => {
          const bgColor = colors.tags[index % colors.tags.length];

          return (
            <View
              key={index}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 20,
                backgroundColor: bgColor,
                borderRadius: 20,
                borderWidth: 1.5,
                borderColor: colors.border,
                margin: 8,
              }}
            >
              <Text
                style={{
                  color: colors.text,
                  fontWeight: "600",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                {skill.name}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Skills;
