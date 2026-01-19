import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "@styles/globalStyles";
import profile from "@assets/me.png";
import { useTheme } from "@context/ThemeContext";

const tagLabels = ["Computer Science", "Developer", "UI/UX", "Problem Solver"];

const ProfileCard: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={{ width: "100%", marginTop: 60 }}>
      <View
        style={{
          position: "absolute",
          top: 8,
          left: 8,
          right: 0,
          height: "100%",
          backgroundColor: colors.shadow,
          borderRadius: 20,
        }}
      />

      <View
        style={{
          padding: 20,
          backgroundColor: colors.card,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: colors.border,
          position: "relative",
          transform: [{ rotate: "-2deg" }],
        }}
      >
        <Image
          source={profile}
          style={{
            position: "absolute",
            top: -55,
            right: 10,
            width: 120,
            height: 120,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: colors.border,
            backgroundColor: colors.avatarBg,
          }}
        />

        <Text
          style={[
            styles.titleText,
            {
              fontSize: 25,
              marginBottom: 6,
              paddingRight: 80,
              color: colors.text,
            },
          ]}
        >
          Hi, I'm{" "}
          <Text
            style={{
              fontWeight: "bold",
              color: colors.accent,
              fontStyle: "italic",
            }}
          >
            Mikaela Shane Estrellanes
          </Text>
        </Text>

        {/* Tags */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 12,
          }}
        >
          {tagLabels.map((label, index) => (
            <View
              key={index}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 999,
                backgroundColor: colors.tags[index],
                borderWidth: 1.5,
                borderColor: colors.border,
              }}
            >
              <Text
                style={{ fontSize: 12, fontWeight: "600", color: colors.text }}
              >
                {label}
              </Text>
            </View>
          ))}
        </View>

        {/* Bio */}
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22,
            fontWeight: "500",
            color: colors.subText,
            fontStyle: "italic",
          }}
        >
          I’m a 3rd-year BS Computer Science student at De La Salle Lipa with a
          strong interest in software development. I enjoy building practical,
          user-focused applications and continuously improving my skills in
          programming, problem-solving, and modern technologies.
        </Text>
      </View>
    </View>
  );
};

export default ProfileCard;
