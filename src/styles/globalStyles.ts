import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContainer: {
    width: "100%",
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 70,
    fontWeight: "bold",
    fontFamily: "PinyonScript",
    textAlign: "center",
  },
  linkButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  linkButtonText: {
    marginLeft: 8,
    fontWeight: "600",
  },
  skillsChip: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1.5,
    margin: 8,
  },
  skillsChipText: {
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
  },
  projectTagChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  profileTagChip: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1.5,
  },
  tagText: {
    fontSize: 12,
    fontWeight: "600",
  },
});