import { View, Text, Dimensions, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useTheme } from "@context/ThemeContext";
import projectsData from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

const screenHeight = Dimensions.get("window").height - 200;

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github: string;
  live?: string;
}

const Projects: React.FC = () => {
  const { colors } = useTheme();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <View
      style={{
        backgroundColor: colors.background[3],
        width: "100%",
        minHeight: screenHeight,
        paddingHorizontal: 25,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 70,
          fontWeight: "bold",
          color: colors.text,
          fontFamily: "PinyonScript",
          textAlign: "center",
          marginBottom: 30,
          marginTop: 40,
        }}
      >
        Projects
      </Text>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProjectCard project={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
          paddingTop: 10,
        }}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
        scrollEnabled={false}
      />
    </View>
  );
};

export default Projects;