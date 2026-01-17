import { View, Text, Dimensions } from "react-native";
import React from "react";
import { styles } from "../styles/globalStyles";
import ProfileCard from "./ProfileCard";
import { useTheme } from "../context/ThemeContext";

const screenHeight = Dimensions.get("window").height - 170;

const Profile: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background[0],
          width: "100%",
          height: screenHeight, 
          paddingHorizontal: 35,
        },
      ]}
    >
      <Text
        style={{
          alignSelf: "center",
          fontSize: 100,
          fontWeight: "bold",
          color: colors.text,
          fontFamily: "PinyonScript",
        }}
      >
        Portfolio
      </Text>

      <ProfileCard />
    </View>
  );
};

export default Profile;
