import { TouchableOpacity, View, Text, Linking } from "react-native";
import React from "react";
import { useTheme } from "@context/ThemeContext";
import { Feather } from "@expo/vector-icons";
import type { SocialCardProps } from "../../types";

const SocialCard: React.FC<SocialCardProps> = ({ item }) => {
  const { colors } = useTheme();

  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err),
    );
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.border,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
      }}
      onPress={() => handlePress(item.url)}
      activeOpacity={0.7}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 12,
          backgroundColor: colors.tags[1],
          justifyContent: "center",
          alignItems: "center",
          marginRight: 16,
        }}
      >
        {item.icon}
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: colors.text,
            marginBottom: 4,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: colors.subText,
          }}
        >
          {item.handle}
        </Text>
      </View>
      <Feather name="chevron-right" size={20} color={colors.subText} />
    </TouchableOpacity>
  );
};

export default SocialCard;
