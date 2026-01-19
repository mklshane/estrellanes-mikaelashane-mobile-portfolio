import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions,
} from "react-native";
import React from "react";
import { useTheme } from "@context/ThemeContext";
import { Feather } from "@expo/vector-icons";

import priorixImage from "../../../assets/priorix.jpg";
import talaImage from "../../../assets/tala.jpg";
import jpcsImage from "../../../assets/jpcs.jpg";
import medisysImage from "../../../assets/medisys.jpg";

const imageMap: { [key: string]: any } = {
  "@assets/priorix.jpg": priorixImage,
  "@assets/tala.jpg": talaImage,
  "@assets/jpcs.jpg": jpcsImage,
  "@assets/medisys.jpg": medisysImage,
};

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github: string;
  live?: string;
}

interface ProjectCardProps {
  project: Project;
}

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.85;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { colors } = useTheme();

  const handlePressGithub = () => {
    if (project.github) {
      Linking.openURL(project.github);
    }
  };

  const handlePressLive = () => {
    if (project.live) {
      Linking.openURL(project.live);
    }
  };

  const getImageSource = () => {
    if (!project.image) return null;

    if (imageMap[project.image]) {
      return imageMap[project.image];
    }
    return { uri: project.image };
  };

  const imageSource = getImageSource();

  return (
    <View
      style={{
        width: CARD_WIDTH,
        backgroundColor: colors.card,
        borderRadius: 20,
        padding: 20,
        marginBottom: 25,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 5,
        borderWidth: 1,
        borderColor: colors.border,
      }}
    >
      {imageSource ? (
        <Image
          source={imageSource}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 12,
            marginBottom: 15,
            borderWidth: 1,
            borderColor: colors.border,
            resizeMode: "cover",
          }}
        />
      ) : (
        <View
          style={{
            width: "100%",
            height: 180,
            borderRadius: 12,
            backgroundColor: colors.background[2],
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: colors.border,
            marginBottom: 15,
          }}
        >
          <Feather name="image" size={50} color={colors.accent} />
          <Text
            style={{
              color: colors.text,
              marginTop: 10,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            {project.title}
          </Text>
        </View>
      )}

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: colors.text,
          marginBottom: 8,
        }}
      >
        {project.title}
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: colors.subText,
          lineHeight: 20,
          marginBottom: 15,
        }}
      >
        {project.description}
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginBottom: 20,
          gap: 8,
        }}
      >
        {project.tags.map((tag, index) => (
          <View
            key={`${project.id}-${tag}-${index}`}
            style={{
              backgroundColor: colors.tags[index % colors.tags.length],
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text
              style={{ fontSize: 12, fontWeight: "600", color: colors.text }}
            >
              {tag}
            </Text>
          </View>
        ))}
      </View>

      <View
        style={{ flexDirection: "row", justifyContent: "flex-start", gap: 12 }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.background[1],
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.border,
          }}
          onPress={handlePressGithub}
          activeOpacity={0.7}
        >
          <Feather name="github" size={20} color={colors.text} />
          <Text
            style={{ marginLeft: 8, color: colors.text, fontWeight: "600" }}
          >
            Code
          </Text>
        </TouchableOpacity>

        {project.live && (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: colors.background[1],
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.border,
            }}
            onPress={handlePressLive}
            activeOpacity={0.7}
          >
            <Feather name="external-link" size={20} color={colors.text} />
            <Text
              style={{ marginLeft: 8, color: colors.text, fontWeight: "600" }}
            >
              Live Demo
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProjectCard;
