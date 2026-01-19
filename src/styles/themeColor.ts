export type ThemeColors = {
  background: string[];
  card: string;
  shadow: string;
  border: string;
  text: string;
  subText: string;
  accent: string;
  avatarBg: string;
  tags: string[];
};

export const lightColors: ThemeColors = {
  background: ["#F7C7DF", "#fef1a7", "#D0FFC3", "#dcd2ff"],
  card: "#FEEB85",
  shadow: "#000000",
  border: "#000000",
  text: "#000000",
  subText: "#333333",
  accent: "#6f4bef",
  avatarBg: "#C8B9FE",
  tags: ["#C8B9FE", "#FFD6A5", "#BEE7E8", "#FFB7C5"],
};

export const darkColors: ThemeColors = {
  background: ["#1A1625", "#2A2440", "#3A2F5F", "#1F1A35"],
  card: "#2A2440",
  shadow: "#dfdfdf",
  border: "#f8f8f8",
  text: "#f3f3f3",
  subText: "#D6D3E0",
  accent: "#B9A7FF",
  avatarBg: "#5E4B8B",
  tags: ["#5E4B8B", "#8B6F4E", "#4C7A7A", "#8B4C6A"],
};
