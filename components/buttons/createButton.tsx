import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface CreateButtonProps {
  text: string;
  handlePress: () => void;
}
const CreateButton = ({ handlePress, text }: CreateButtonProps) => (
  <TouchableOpacity style={styles.button} onPress={handlePress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: "90%",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default CreateButton;
