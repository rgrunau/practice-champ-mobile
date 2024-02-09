import { TouchableOpacity, Text } from "react-native";

interface EndButtonProps {
  title: string;
  onPress: () => void;
}
const EndButton = ({ title, onPress }: EndButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#FF6C44",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default EndButton;
