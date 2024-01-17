import { View, TextInput, StyleSheet } from "react-native";

interface TextInputProps {
  placeholder: string;
}

const TextInputComponent = ({ placeholder }: TextInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={"#000"}
        keyboardType="email-address"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 400,
    marginBottom: 8,
    marginTop: 8,
  },
  input: {
    width: 400,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 10,
  },
});

export default TextInputComponent;
