import { View, Text, Dimensions, FlatList } from "react-native";
import React from "react";
import { useTheme } from "@context/ThemeContext";
import { styles } from "@styles/globalStyles";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import SocialCard from "./SocialCard";
import type { SocialLink } from "../../types";

const screenHeight = Dimensions.get("window").height - 200;

const Socials: React.FC = () => {
  const { colors } = useTheme();

  const socialLinks: SocialLink[] = [
    {
      id: 1,
      name: "Email",
      handle: "shaneestrellanes@gmail.com",
      url: "mailto:shaneestrellanes@gmail.com",
      icon: <Feather name="mail" size={24} color={colors.text} />,
    },
    {
      id: 2,
      name: "LinkedIn",
      handle: "mikaela-shane-estrellanes",
      url: "https://www.linkedin.com/in/mikaela-shane-estrellanes-534467232/",
      icon: <FontAwesome5 name="linkedin" size={24} color={colors.text} />,
    },
    {
      id: 3,
      name: "GitHub",
      handle: "mklshane",
      url: "https://github.com/mklshane",
      icon: <Feather name="github" size={24} color={colors.text} />,
    },
    {
      id: 4,
      name: "Facebook",
      handle: "mikaelashane.estrellanes",
      url: "https://www.facebook.com/mikaelashane.estrellanes",
      icon: <FontAwesome5 name="facebook" size={24} color={colors.text} />,
    },
  ];

  const renderSocialCard = ({ item }: { item: SocialLink }) => <SocialCard item={item} />;

  return (
    <View
      style={[
        styles.sectionContainer,
        {
          backgroundColor: colors.background[0],
          minHeight: screenHeight,
          paddingBottom: 40,
        },
      ]}
    >
      <View style={{ alignItems: "center", marginBottom: 40 }}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colors.text,
              marginBottom: 30,
              marginTop: 40,
            },
          ]}
        >
          Contact Me
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: colors.subText,
            textAlign: "center",
            maxWidth: 300,
            lineHeight: 24,
          }}
        >
          Let's connect! Feel free to reach out through any of these platforms.
        </Text>
      </View>

      <View style={{ width: "100%", maxWidth: 400 }}>
        <FlatList
          data={socialLinks}
          renderItem={renderSocialCard}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

export default Socials;
