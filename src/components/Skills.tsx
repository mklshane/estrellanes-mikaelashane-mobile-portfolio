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
        styles.sectionContainer,
        {
          backgroundColor: colors.background[1],
          height: screenHeight,
        },
      ]}
    >
      <Text
        style={[
          styles.sectionTitle,
          {
            color: colors.text,
            marginBottom: 0,
          },
        ]}
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
              style={[
                styles.skillsChip,
                {
                  backgroundColor: bgColor,
                  borderColor: colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.skillsChipText,
                  { color: colors.text },
                ]}
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
